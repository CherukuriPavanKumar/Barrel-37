export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;          // primary price (e.g. 40ml / 4 shots)
  priceLabel?: string;    // label for primary price e.g. "40 ml"
  price2?: number;        // secondary price (e.g. 60ml / 6 shots)
  price2Label?: string;   // label for secondary price e.g. "60 ml"
  category: 'whiskey' | 'cocktail' | 'house_signature' | 'spritz' | 'sour' | 'rum' | 'tequila' | 'gin' | 'shot' | 'shots_set' | 'vodka' | 'mocktail' | 'beer' | 'soft_drink' | 'burger' | 'chicken_wings' | 'combo' | 'appetizer' | 'side';
  ingredients: string[];
  calories?: number;
  sensoryNotes?: string;
  isPopular?: boolean;
  image?: string;
  isFood?: boolean;
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

