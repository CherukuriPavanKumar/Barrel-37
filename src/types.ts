export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'whisky' | 'cocktail' | 'mocktail';
  ingredients: string[];
  calories?: number;
  sensoryNotes?: string;
  isPopular?: boolean;
  image?: string;
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

export type ActivePage = 'home' | 'menu' | 'ambience' | 'about' | 'events' | 'find-us' | 'reservation' | 'admin';

export type Language = 'en' | 'pl';

