import { MenuItem, Language } from '../types';

export interface LocalizedMenuItem {
  name: string;
  description: string;
  ingredients: string[];
  sensoryNotes?: string;
}

export const POLISH_MENU_ITEMS: Record<string, LocalizedMenuItem> = {
  // --- WHISKEY (brand names preserved, descriptions translated) ---
  'w-1': { name: 'Royal Salute', description: 'Premierowa mieszana whisky szkocka.', ingredients: [] },
  'w-2': { name: 'Johnny Walker Blue Label', description: 'Niezrównane arcydzieło.', ingredients: [] },
  'w-3': { name: 'Johnny Walker Red Label', description: 'Najlepiej sprzedająca się whisky szkocka na świecie.', ingredients: [] },
  'w-4': { name: 'Johnny Walker Black Label', description: 'Prawdziwa ikona.', ingredients: [] },
  'w-5': { name: 'Chivas Regal 12 YO', description: 'Gładka, bogata i hojna.', ingredients: [] },
  'w-6': { name: 'Chivas Regal XV', description: 'Dojrzewana 15 lat.', ingredients: [] },
  'w-7': { name: 'Grant\'s', description: 'Potrójnie dębowa mieszana whisky szkocka.', ingredients: [] },
  'w-8': { name: 'Jack Daniel\'s', description: 'Whiskey z Tennessee.', ingredients: [] },
  'w-9': { name: 'Ballantine\'s', description: 'Najlepsza mieszana whisky szkocka.', ingredients: [] },
  'w-10': { name: 'Jameson', description: 'Irlandzka whiskey.', ingredients: [] },
  'w-11': { name: 'Tullamore D.E.W.', description: 'Oryginalna potrójnie destylowana irlandzka whiskey.', ingredients: [] },
  'w-12': { name: 'Glenfiddich 12 YO', description: 'Single malt szkocka whisky.', ingredients: [] },

  // --- COCKTAILS ---
  'c-1': { name: 'Mojito', description: 'Klasyczny orzeźwiający koktajl.', ingredients: ['Biały Rum', 'Świeża Mięta', 'Sok z Limonki', 'Woda Gazowana', 'Lód'] },
  'c-2': { name: 'Pornstar Martini Classic', description: 'Owocowy i słodki.', ingredients: ['Wódka Waniliowa', 'Sok z Cytryny', 'Puree z Marakui'] },
  'c-3': { name: 'Margarita Classic', description: 'Klasyczny meksykański koktajl.', ingredients: ['Tequila', 'Cointreau', 'Sok z limonki'] },
  'c-4': { name: 'Margarita Spicy', description: 'Klasyczna Margarita z ostrym akcentem.', ingredients: ['Tequila', 'Cointreau', 'Sok z limonki', 'Tabasco'] },
  'c-5': { name: 'Jägerbomb', description: 'Ulubieniec imprezowiczów.', ingredients: ['Jägermeister', 'Napój Energetyczny'] },
  'c-6': { name: 'Long Island', description: 'Mocny i klasyczny.', ingredients: ['Wódka', 'Gin', 'Biały Rum', 'Tequila', 'Triple Sec', 'Sok z Cytryny', 'Syrop Cukrowy'] },

  // --- HOUSE SIGNATURES ---
  'hs-1': { name: 'Velvet Venom', description: 'Koktajl firmowy.', ingredients: ['Wódka', 'Likier Blue Curaçao', 'Sok z Limonki', 'Syrop Waniliowy', 'Puree z Marakui'] },
  'hs-2': { name: 'Barrel Special', description: 'Nasza specjalność.', ingredients: ['Ciemny Rum', 'Triple Sec', 'Puree z Marakui', 'Sour Mix', 'Syrop Blue Curaçao'] },
  'hs-3': { name: 'F**k You', description: 'Mocna firmowa mieszanka.', ingredients: ['Whiskey', 'Jägermeister', 'Cola'] },
  'hs-4': { name: 'Adios, MotherF**ker', description: 'Niebieski i mocny.', ingredients: ['Wódka', 'Gin', 'Biały Rum', 'Tequila', 'Blue Curaçao', 'Sok z Cytryny', 'Syrop Cukrowy', 'Sprite'] },

  // --- SPRITZ ---
  'sp-1': { name: 'Aperol Spritz', description: 'Klasyczny włoski aperitif.', ingredients: ['Aperol', 'Prosecco', 'Woda gazowana'] },
  'sp-2': { name: 'Campari Spritz', description: 'Gorzki i orzeźwiający.', ingredients: ['Campari', 'Prosecco', 'Woda gazowana'] },
  'sp-3': { name: 'Passion Spritz', description: 'Owocowy spritz.', ingredients: ['Puree z Marakui', 'Prosecco'] },
  'sp-4': { name: 'Strawberry Spritz', description: 'Słodki i orzeźwiający.', ingredients: ['Campari', 'Puree Truskawkowe', 'Mięta', 'Prosecco'] },
  'sp-5': { name: 'Hugo', description: 'Kwiatowy i świeży.', ingredients: ['Syrop z Czarnego Bzu', 'Sok z limonki', 'Prosecco'] },

  // --- SOURS ---
  'so-1': { name: 'Vodka Sour', description: 'Klasyczny sour.', ingredients: ['Wódka', 'Sok z Cytryny', 'Syrop Cukrowy', 'Angostura', 'Białko Jajka'] },
  'so-2': { name: 'Whiskey Sour', description: 'Ponadczasowy klasyk.', ingredients: ['Whiskey', 'Sok z Cytryny', 'Syrop Cukrowy', 'Angostura', 'Białko Jajka'] },
  'so-3': { name: 'Amaretto Sour', description: 'Słodko-kwaśny migdałowy.', ingredients: ['Amaretto', 'Sok z cytryny', 'Syrop Cukrowy', 'Angostura', 'Białko Jajka'] },

  // --- RUM ---
  'r-1': { name: 'Bacardi', description: 'Klasyczny biały rum.', ingredients: [] },
  'r-2': { name: 'Havana', description: 'Kubański rum.', ingredients: [] },
  'r-3': { name: 'Kraken', description: 'Korzenny czarny rum.', ingredients: [] },

  // --- TEQUILA ---
  't-1': { name: 'Olmeca', description: 'Tequila premium.', ingredients: [] },
  't-2': { name: 'Cuervo', description: 'Złota tequila.', ingredients: [] },

  // --- GIN ---
  'g-1': { name: 'Bombay Sapphire', description: 'Gin suchy premium.', ingredients: [] },
  'g-2': { name: 'Hendrick\'s', description: 'Szkocki gin.', ingredients: [] },
  'g-3': { name: 'Gordon\'s', description: 'Londyński suchy gin.', ingredients: [] },

  // --- SHOTS ---
  'sh-1': { name: 'Baby Guinness', description: 'Słodki warstwowy shot.', ingredients: ['Kahlua', 'Bailey\'s'] },
  'sh-2': { name: 'Sambuca', description: 'Anyżowy likier.', ingredients: ['Sambuca', 'Ziarna Kawy'] },
  'sh-3': { name: 'Jager Zombie Brain', description: 'Straszny i mocny.', ingredients: ['Peach Schnapps', 'Jägermeister', 'Bailey\'s', 'Grenadyna'] },
  'sh-4': { name: 'Vanilla Zombie Brain', description: 'Słodki straszny shot.', ingredients: ['Peach Schnapps', 'Wódka Waniliowa', 'Bailey\'s', 'Grenadyna'] },
  'sh-5': { name: 'B-52', description: 'Klasyczny warstwowy shot.', ingredients: ['Kahlua', 'Bailey\'s', 'Cointreau'] },
  'sh-6': { name: 'Alien Brain', description: 'Kolorowy shot.', ingredients: ['Peach Schnapps', 'Blue Curaçao', 'Bailey\'s', 'Grenadyna'] },

  // --- SHOTS SET ---
  'shs-1': { name: 'Kamikadze', description: 'Wódka, Blue Curaçao, sok z cytryny.', ingredients: ['Wódka', 'Blue Curaçao', 'Sok z cytryny'] },
  'shs-2': { name: 'Lavender Drop', description: 'Gin, syrop lawendowy, sok z cytryny, syrop cukrowy.', ingredients: ['Gin', 'Syrop Lawendowy', 'Sok z cytryny', 'Syrop Cukrowy'] },
  'shs-3': { name: 'Fiery Mango', description: 'Tequila, puree z marakui, Cointreau, Tabasco.', ingredients: ['Tequila', 'Puree z Marakui', 'Cointreau', 'Tabasco'] },

  // --- VODKA ---
  'v-1': { name: 'Finlandia', description: 'Wódka premium.', ingredients: [] },
  'v-2': { name: 'Absolut', description: 'Wódka szwedzka.', ingredients: [] },
  'v-3': { name: 'Belvedere', description: 'Wódka luksusowa.', ingredients: [] },
  'v-4': { name: 'Grey Goose', description: 'Francuska wódka luksusowa.', ingredients: [] },

  // --- MOCKTAILS ---
  'm-1': { name: 'Virgin Mojito', description: 'Orzeźwiający bezalkoholowy.', ingredients: ['Limonka', 'Świeża Mięta', 'Woda Gazowana'] },
  'm-2': { name: 'Passion Martini', description: 'Owocowy bezalkoholowy.', ingredients: ['Zielona Herbata', 'Puree z Marakui', 'Sok z Cytryny'] },
  'm-3': { name: 'Bitter Spritz', description: 'Gorzki bezalkoholowy.', ingredients: ['Syrop Gorzki', 'Tonik'] },

  // --- BEER ---
  'b-1': { name: 'Budweiser (z Beczki)', description: 'Klasyczne piwo beczkowe.', ingredients: [] },
  'b-2': { name: 'Stella Artois (z Beczki)', description: 'Piwo beczkowe premium.', ingredients: [] },
  'b-3': { name: 'Hoegaarden (z Beczki)', description: 'Piwo pszeniczne beczkowe.', ingredients: [] },
  'b-4': { name: 'Corona Extra', description: 'Piwo butelkowe.', ingredients: [] },
  'b-5': { name: 'Corona Cero 0%', description: 'Piwo butelkowe bezalkoholowe.', ingredients: [] },
  'b-6': { name: 'Leffe Blonde', description: 'Piwo butelkowe.', ingredients: [] },
  'b-7': { name: 'Franziskaner Weissbier', description: 'Piwo pszeniczne butelkowe.', ingredients: [] },
  'b-8': { name: 'Corona Extra Wiaderko', description: 'Kup 5, szóste gratis.', ingredients: [] },

  // --- SOFT DRINKS ---
  'sd-1': { name: 'Cola / Cola Zero', description: 'Orzeźwiający napój gazowany.', ingredients: [] },
  'sd-2': { name: 'Sprite', description: 'Napój cytrynowo-limonkowy.', ingredients: [] },
  'sd-3': { name: 'Red Bull', description: 'Napój energetyczny.', ingredients: [] },
  'sd-4': { name: 'Schweppes', description: 'Tonik.', ingredients: [] },
  'sd-5': { name: 'Woda', description: 'Woda niegazowana lub gazowana.', ingredients: [] },

  // --- BURGERS (FOOD) ---
  'fb-1': {
    name: 'Burger Barrel BBQ',
    description: 'Kotlet wołowy 180 g na bułce brioche z podwójnym Cheddarem, chrupiącym bekonem, sałatą rzymską, pomidorem, czerwoną cebulą, majonezem wędzonym i naszym firmowym sosem Barrel BBQ. Podawany z frytkami, coleslaw i ketchupem.',
    ingredients: ['kotlet wołowy 180g', 'bułka brioche', 'podwójny Cheddar', 'chrupiący bekon', 'sałata rzymska', 'pomidor', 'czerwona cebula', 'majonez wędzony', 'sos Barrel BBQ'],
  },
  'fb-2': {
    name: 'Podwójny Smash Cheeseburger',
    description: '2 x 90 g smashowane kotlety wołowe, bułka brioche, Cheddar, czerwona cebula, sałata rzymska i nasz Barrel Special Sauce. Podawany z frytkami, coleslaw i ketchupem.',
    ingredients: ['2x90g smashowane kotlety wołowe', 'bułka brioche', 'Cheddar', 'czerwona cebula', 'sałata rzymska', 'Barrel Special Sauce'],
  },
  'fb-3': {
    name: 'Klasyczny Cheeseburger',
    description: 'Kotlet wołowy 180 g z podwójnym Cheddarem, sałatą rzymską, pomidorem, czerwoną cebulą i marynowanym korniszonem, podawany na bułce brioche z ketchupem. Podawany z frytkami, coleslaw i ketchupem.',
    ingredients: ['kotlet wołowy 180g', 'podwójny Cheddar', 'sałata rzymska', 'pomidor', 'czerwona cebula', 'marynowany korniszon', 'bułka brioche', 'ketchup'],
  },
  'fb-4': {
    name: 'Burger Halloumi',
    description: 'Grillowane halloumi z grillowanym burakiem, rukolą, majonezem pietruszkowym, grillowanymi pieczarkami i salsą, podawany na bułce brioche. Podawany z frytkami, coleslaw i ketchupem.',
    ingredients: ['grillowane halloumi', 'grillowany burak', 'rukola', 'majonez pietruszkowy', 'grillowane pieczarki', 'salsa', 'bułka brioche'],
  },
  'fb-5': {
    name: 'Ostry Burger z Kurczakiem Barrel',
    description: 'Grillowany kurczak z rozpuszczoną Goudą, czerwoną cebulą, sałatą rzymską, jalapeño i majonezem wędzonym, podawany na bułce brioche. Podawany z frytkami, coleslaw i ketchupem.',
    ingredients: ['grillowany kurczak', 'rozpuszczona Gouda', 'czerwona cebula', 'sałata rzymska', 'jalapeño', 'majonez wędzony', 'bułka brioche'],
  },

  // --- CHICKEN & WINGS (FOOD) ---
  'fc-1': {
    name: 'Skrzydełka Buffalo (8 szt.)',
    description: 'Skrzydełka kurczaka w sosie Buffalo, wykończone kolendrą. Podawane z marchewką, selerem naciowym i sosem blue cheese.',
    ingredients: ['skrzydełka kurczaka', 'sos Buffalo', 'kolendra', 'marchewka i seler naciowy', 'sos blue cheese'],
  },
  'fc-2': {
    name: 'Skrzydełka BBQ (8 szt.)',
    description: 'Skrzydełka kurczaka w sosie BBQ, wykończone dymką i prażonym sezamem. Podawane z marchewką, selerem naciowym i sosem blue cheese.',
    ingredients: ['skrzydełka kurczaka', 'sos BBQ', 'dymka', 'prażony sezam', 'marchewka i seler naciowy', 'sos blue cheese'],
  },
  'fc-3': {
    name: 'Skrzydełka Miodowo-Musztardowe (8 szt.)',
    description: 'Skrzydełka kurczaka w sosie miodowo-musztardowym. Podawane z marchewką, selerem naciowym i sosem blue cheese.',
    ingredients: ['skrzydełka kurczaka', 'sos miodowo-musztardowy', 'marchewka i seler naciowy', 'sos blue cheese'],
  },
  'fc-4': {
    name: 'Stripsy z Kurczaka z Frytkami (5 szt.)',
    description: 'Chrupiące stripsy z kurczaka w panierce corn flakes, podawane z frytkami i sosem miodowo-musztardowym.',
    ingredients: ['chrupiące stripsy z kurczaka', 'frytki', 'sos miodowo-musztardowy'],
  },

  // --- BARREL COMBOS (FOOD) ---
  'fco-1': {
    name: 'Chicken Box',
    description: '3 skrzydełka, 3 stripsy z kurczaka, frytki i sos blue cheese.',
    ingredients: ['3 skrzydełka', '3 stripsy z kurczaka', 'frytki', 'sos blue cheese'],
  },
  'fco-2': {
    name: 'Mini Chicken Combo',
    description: '3 skrzydełka Buffalo, 3 skrzydełka Barrel BBQ, 3 skrzydełka miodowo-musztardowe, 3 stripsy, frytki, 2 sosy blue cheese i sos miodowo-musztardowy.',
    ingredients: ['3 skrzydełka Buffalo', '3 skrzydełka Barrel BBQ', '3 skrzydełka miodowo-musztardowe', '3 stripsy', 'frytki', '2 sosy blue cheese', 'sos miodowo-musztardowy'],
  },
  'fco-3': {
    name: 'Barrel Przystawki Combo',
    description: '6 paluszków mozzarella, 6 nuggetów jalapeño z serem, frytki ze słodkich ziemniaków, 6 krążków cebulowych, Barrel Special Sauce i 2 sosy chipotle mayo.',
    ingredients: ['6 paluszków mozzarella', '6 nuggetów jalapeño z serem', 'frytki ze słodkich ziemniaków', '6 krążków cebulowych', 'Barrel Special Sauce', '2 sosy chipotle mayo'],
  },
  'fco-4': {
    name: 'Barrel Chicken Combo',
    description: '6 skrzydełek Buffalo, 6 skrzydełek Barrel BBQ, 6 skrzydełek miodowo-musztardowych, frytki, 2 sosy blue cheese i Barrel Special Sauce.',
    ingredients: ['6 skrzydełek Buffalo', '6 skrzydełek Barrel BBQ', '6 skrzydełek miodowo-musztardowych', 'frytki', '2 sosy blue cheese', 'Barrel Special Sauce'],
  },

  // --- APPETIZERS (FOOD) ---
  'fa-1': {
    name: 'Nuggetsy z Kurczaka (8 szt.)',
    description: 'Chrupiące nuggetsy z kurczaka podawane z sosem chipotle mayo.',
    ingredients: ['chrupiące nuggetsy z kurczaka', 'sos chipotle mayo'],
  },
  'fa-2': {
    name: 'Paluszki Mozzarella (8 szt.)',
    description: 'Chrupiące paluszki mozzarella podawane z sosem chipotle mayo.',
    ingredients: ['chrupiące paluszki mozzarella', 'sos chipotle mayo'],
  },
  'fa-3': {
    name: 'Nuggetsy Jalapeño z Serem (8 szt.)',
    description: 'Chrupiące nuggetsy jalapeño z serem podawane z sosem chipotle mayo.',
    ingredients: ['chrupiące nuggetsy jalapeño z serem', 'sos chipotle mayo'],
  },
  'fa-4': {
    name: 'Nachos z Serem',
    description: 'Chrupiące nachos z tartą Goudą, czerwoną cebulą i świeżą kolendrą, podawane z limonką.',
    ingredients: ['chrupiące nachos', 'tarta Gouda', 'czerwona cebula', 'świeża kolendra', 'limonka'],
  },
  'fa-5': {
    name: 'Krążki Cebulowe (10 szt.)',
    description: 'Chrupiące krążki cebulowe podawane z sosem chipotle mayo.',
    ingredients: ['chrupiące krążki cebulowe', 'sos chipotle mayo'],
  },
  'fa-6': {
    name: 'Chilli con Carne',
    description: 'Mielona wołowina z czerwoną fasolą i pomidorami, z serem, śmietaną, świeżą kolendrą i marynowanym chilli, podawane z chrupiącymi nachos.',
    ingredients: ['mielona wołowina', 'czerwona fasola', 'pomidory', 'ser', 'śmietana', 'świeża kolendra', 'marynowane chilli', 'chrupiące nachos'],
  },

  // --- SIDES (FOOD) ---
  'fs-1': {
    name: 'Frytki',
    description: 'Chrupiące frytki podawane z ketchupem.',
    ingredients: ['chrupiące frytki', 'ketchup'],
  },
  'fs-2': {
    name: 'Frytki ze Słodkich Ziemniaków',
    description: 'Chrupiące frytki ze słodkich ziemniaków podawane z sosem chipotle mayo.',
    ingredients: ['chrupiące frytki ze słodkich ziemniaków', 'sos chipotle mayo'],
  },
  'fs-3': {
    name: 'Frytki Loaded Barrel',
    description: 'Chrupiące frytki z serem, chrupiącym bekonem, jalapeño i dymką, polane naszym sosem Barrel BBQ.',
    ingredients: ['chrupiące frytki', 'ser', 'chrupiący bekon', 'jalapeño', 'dymka', 'sos Barrel BBQ'],
  },
  'fs-4': {
    name: 'Krążki Jalapeño',
    description: 'Chrupiące krążki jalapeño w cieście podawane z sosem blue cheese.',
    ingredients: ['chrupiące krążki jalapeño w cieście', 'sos blue cheese'],
  },
  'fs-5': {
    name: 'Barrel Coleslaw',
    description: 'Nasz domowy coleslaw z białej kapusty.',
    ingredients: ['coleslaw z białej kapusty'],
  },
};

export function getLocalizedItem(item: MenuItem, language: Language): MenuItem {
  if (language === 'en') return item;
  
  const localized = POLISH_MENU_ITEMS[item.id];
  if (!localized) return item;
  
  return {
    ...item,
    name: localized.name,
    description: localized.description,
    ingredients: localized.ingredients,
    sensoryNotes: localized.sensoryNotes || item.sensoryNotes
  };
}
