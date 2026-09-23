export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'whiskey' | 'cocktail' | 'house_signature' | 'spritz' | 'sour' | 'rum' | 'tequila' | 'gin' | 'shot' | 'shots_set' | 'vodka' | 'mocktail' | 'burger' | 'chicken_wings' | 'combo' | 'appetizer' | 'side';
  ingredients: string[];
  calories?: number;
  sensoryNotes?: string;
  isPopular?: boolean;
  image?: string;
  isFood?: boolean; // We add a flag or compute it, let's just compute it by category later
}

export interface Reservation {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  confirmationCode?: string;
  created_at?: string;
}

export type ActivePage = 'home' | 'menu' | 'ambience' | 'about' | 'find-us' | 'reservation' | 'admin';

export type Language = 'en' | 'pl';

