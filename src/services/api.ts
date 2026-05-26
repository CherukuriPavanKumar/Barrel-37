import { MenuItem, Reservation } from '../types';
import { supabase } from './supabase';
import { MENU_ITEMS } from '../data/menu';

export const ApiService = {
  // --- AUTHENTICATION ---

  async login(email: string, password: string): Promise<boolean> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Supabase auth failed:", error.message);
      // Removed the hardcoded 'admin / barrel37' fallback so we don't accidentally get fake-logged in
      // without actual Supabase Database permissions.
      return false;
    }
    return true;
  },

  async logout(): Promise<void> {
    await supabase.auth.signOut();
  },

  async checkAuth(): Promise<boolean> {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  },

  // --- MENU ITEMS ---
  
  async getMenuItems(): Promise<MenuItem[]> {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category', { ascending: true }); // or whatever order
        
      if (error || !data || data.length === 0) {
        console.warn('Supabase not connected or empty table. Using fallback data.');
        return MENU_ITEMS;
      }
      return data as MenuItem[];
    } catch (e) {
      console.warn('Supabase fetch failed. Using fallback data.', e);
      return MENU_ITEMS;
    }
  },

  async addMenuItem(item: MenuItem): Promise<MenuItem[]> {
    const { error } = await supabase.from('menu_items').insert([{...item, created_at: new Date().toISOString()}]);
    if (error) {
      console.error("Error adding item:", error);
      // Fallback for UI if supabase isn't connected
      const saved = localStorage.getItem('barrel37_menu_items');
      const updatedList = [item, ...(saved ? JSON.parse(saved) : MENU_ITEMS)];
      localStorage.setItem('barrel37_menu_items', JSON.stringify(updatedList));
      return updatedList;
    }
    return this.getMenuItems();
  },

  async deleteMenuItem(id: string): Promise<MenuItem[]> {
    const { error } = await supabase.from('menu_items').delete().eq('id', id);
    if (error) {
      console.error("Error deleting item:", error);
      const saved = localStorage.getItem('barrel37_menu_items');
      const currentList = saved ? JSON.parse(saved) : MENU_ITEMS;
      const updatedList = currentList.filter((i: MenuItem) => i.id !== id);
      localStorage.setItem('barrel37_menu_items', JSON.stringify(updatedList));
      return updatedList;
    }
    return this.getMenuItems();
  },

  async resetMenu(): Promise<MenuItem[]> {
    try {
      // Clear all items and re-seed
      await supabase.from('menu_items').delete().neq('id', '0');
      await supabase.from('menu_items').insert(MENU_ITEMS);
    } catch (e) {
      localStorage.removeItem('barrel37_menu_items');
    }
    return this.getMenuItems();
  },

  // --- RESERVATIONS ---

  async createReservation(reservation: Omit<Reservation, 'confirmationCode'>): Promise<Reservation> {
    const uniqueCode = `BRL-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRes = { ...reservation, confirmationCode: uniqueCode };

    const { error } = await supabase.from('reservations').insert([newRes]);
    
    if (error) {
       console.error("Supabase failed, falling back to local storage.", error);
       // For prototype purposes, save to local history if DB fails
       const saved = localStorage.getItem('barrel37_reservations');
       const allRes = saved ? JSON.parse(saved) : [];
       allRes.push(newRes);
       localStorage.setItem('barrel37_reservations', JSON.stringify(allRes));
    }

    return newRes;
  }
};
