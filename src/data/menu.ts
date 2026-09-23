import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- WHISKEY (40 ml / 60 ml) ---
  { id: 'w-1', name: 'Royal Salute', description: 'Premium blended Scotch whisky.', price: 175, priceLabel: '40 ml', price2: 262.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-2', name: 'Johnny Walker Blue Label', description: 'An unrivaled masterpiece.', price: 195, priceLabel: '40 ml', price2: 292.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-3', name: 'Johnny Walker Red Label', description: 'The world\'s best-selling Scotch whisky.', price: 18, priceLabel: '40 ml', price2: 27, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-4', name: 'Johnny Walker Black Label', description: 'A true icon.', price: 26, priceLabel: '40 ml', price2: 39, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-5', name: 'Chivas Regal 12 YO', description: 'Smooth, rich and generous.', price: 35, priceLabel: '40 ml', price2: 52.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-6', name: 'Chivas Regal XV', description: 'Aged 15 years.', price: 55, priceLabel: '40 ml', price2: 82.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-7', name: 'Grant\'s', description: 'Triple wood blended Scotch whisky.', price: 19, priceLabel: '40 ml', price2: 28.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-8', name: 'Jack Daniel\'s', description: 'Tennessee whiskey.', price: 18, priceLabel: '40 ml', price2: 27, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-9', name: 'Ballantine\'s', description: 'Finest blended Scotch whisky.', price: 17, priceLabel: '40 ml', price2: 25.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-10', name: 'Jameson', description: 'Irish whiskey.', price: 23, priceLabel: '40 ml', price2: 34.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-11', name: 'Tullamore D.E.W.', description: 'Original triple distilled Irish whiskey.', price: 26, priceLabel: '40 ml', price2: 39, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },
  { id: 'w-12', name: 'Glenfiddich 12 YO', description: 'Single malt Scotch whisky.', price: 55, priceLabel: '40 ml', price2: 82.5, price2Label: '60 ml', category: 'whiskey', ingredients: [], isFood: false },

  // --- COCKTAILS ---
  { id: 'c-1', name: 'Mojito', description: 'Classic refreshing cocktail.', price: 35, category: 'cocktail', ingredients: ['White Rum', 'Fresh Mint', 'Lime Juice', 'Club Soda', 'Ice'], isFood: false },
  { id: 'c-2', name: 'Pornstar Martini Classic', description: 'Fruity and sweet.', price: 36, category: 'cocktail', ingredients: ['Vanilla Vodka', 'Lemon Juice', 'Passion Fruit Puree'], isFood: false },
  { id: 'c-3', name: 'Margarita Classic', description: 'Classic Mexican cocktail.', price: 37, category: 'cocktail', ingredients: ['Tequila', 'Cointreau', 'Lime juice'], isFood: false },
  { id: 'c-4', name: 'Margarita Spicy', description: 'Classic Margarita with a kick.', price: 38, category: 'cocktail', ingredients: ['Tequila', 'Cointreau', 'Lime juice', 'Tabasco'], isFood: false },
  { id: 'c-5', name: 'Jägerbomb', description: 'Party favorite.', price: 35, category: 'cocktail', ingredients: ['Jägermeister', 'Energy Drink'], isFood: false },
  { id: 'c-6', name: 'Long Island', description: 'Strong and classic.', price: 47, category: 'cocktail', ingredients: ['Vodka', 'Gin', 'White Rum', 'Tequila', 'Triple Sec', 'Lemon Juice', 'Simple Syrup'], isFood: false },

  // --- HOUSE SIGNATURES ---
  { id: 'hs-1', name: 'Velvet Venom', description: 'Signature cocktail.', price: 45, category: 'house_signature', ingredients: ['Vodka', 'Blue Curaçao Liqueur', 'Lime Juice', 'Vanilla Syrup', 'Passion Fruit Purée'], isFood: false },
  { id: 'hs-2', name: 'Barrel Special', description: 'Our specialty.', price: 47, category: 'house_signature', ingredients: ['Dark Rum', 'Triple Sec', 'Passion Fruit Purée', 'Sour Mix', 'Blue Curaçao Syrup'], isFood: false },
  { id: 'hs-3', name: 'F**k You', description: 'Strong signature mix.', price: 37, category: 'house_signature', ingredients: ['Whiskey', 'Jägermeister', 'Coke'], isFood: false },
  { id: 'hs-4', name: 'Adios, MotherF**ker', description: 'Blue and strong.', price: 47, category: 'house_signature', ingredients: ['Vodka', 'Gin', 'White Rum', 'Tequila', 'Blue Curaçao', 'Lemon Juice', 'Simple Syrup', 'Sprite'], isFood: false },

  // --- SPRITZ ---
  { id: 'sp-1', name: 'Aperol Spritz', description: 'Classic Italian aperitif.', price: 36, category: 'spritz', ingredients: ['Aperol', 'Prosecco', 'Sparkling water'], isFood: false },
  { id: 'sp-2', name: 'Campari Spritz', description: 'Bitter and refreshing.', price: 36, category: 'spritz', ingredients: ['Campari', 'Prosecco', 'Sparkling water'], isFood: false },
  { id: 'sp-3', name: 'Passion Spritz', description: 'Fruity spritz.', price: 36, category: 'spritz', ingredients: ['Passion Fruit Purée', 'Prosecco'], isFood: false },
  { id: 'sp-4', name: 'Strawberry Spritz', description: 'Sweet and refreshing.', price: 36, category: 'spritz', ingredients: ['Campari', 'Strawberry Purée', 'Mint', 'Prosecco'], isFood: false },
  { id: 'sp-5', name: 'Hugo', description: 'Floral and fresh.', price: 36, category: 'spritz', ingredients: ['Elderflower Syrup', 'Lime juice', 'Prosecco'], isFood: false },

  // --- SOURS ---
  { id: 'so-1', name: 'Vodka Sour', description: 'Classic sour.', price: 37, category: 'sour', ingredients: ['Vodka', 'Lemon Juice', 'Simple Syrup', 'Dash Angostura', 'Egg White'], isFood: false },
  { id: 'so-2', name: 'Whiskey Sour', description: 'Timeless classic.', price: 37, category: 'sour', ingredients: ['Whiskey', 'Lemon Juice', 'Simple Syrup', 'Dash Angostura', 'Egg White'], isFood: false },
  { id: 'so-3', name: 'Amaretto Sour', description: 'Sweet and sour almond.', price: 37, category: 'sour', ingredients: ['Amaretto', 'Lemon juice', 'Simple Syrup', 'Dash Angostura', 'Egg White'], isFood: false },

  // --- RUM (40 ml / 60 ml) ---
  { id: 'r-1', name: 'Bacardi', description: 'Classic white rum.', price: 25, priceLabel: '40 ml', price2: 37.5, price2Label: '60 ml', category: 'rum', ingredients: [], isFood: false },
  { id: 'r-2', name: 'Havana', description: 'Cuban rum.', price: 22, priceLabel: '40 ml', price2: 33, price2Label: '60 ml', category: 'rum', ingredients: [], isFood: false },
  { id: 'r-3', name: 'Kraken', description: 'Spiced black rum.', price: 35, priceLabel: '40 ml', price2: 52.5, price2Label: '60 ml', category: 'rum', ingredients: [], isFood: false },

  // --- TEQUILA (40 ml / 60 ml) ---
  { id: 't-1', name: 'Olmeca', description: 'Premium tequila.', price: 27, priceLabel: '40 ml', price2: 40.5, price2Label: '60 ml', category: 'tequila', ingredients: [], isFood: false },
  { id: 't-2', name: 'Cuervo', description: 'Gold tequila.', price: 30, priceLabel: '40 ml', price2: 45, price2Label: '60 ml', category: 'tequila', ingredients: [], isFood: false },

  // --- GIN (40 ml / 60 ml) ---
  { id: 'g-1', name: 'Bombay Sapphire', description: 'Premium dry gin.', price: 45, priceLabel: '40 ml', price2: 67.5, price2Label: '60 ml', category: 'gin', ingredients: [], isFood: false },
  { id: 'g-2', name: 'Hendrick\'s', description: 'Scottish gin.', price: 40, priceLabel: '40 ml', price2: 60, price2Label: '60 ml', category: 'gin', ingredients: [], isFood: false },
  { id: 'g-3', name: 'Gordon\'s', description: 'London dry gin.', price: 20, priceLabel: '40 ml', price2: 30, price2Label: '60 ml', category: 'gin', ingredients: [], isFood: false },

  // --- SHOTS ---
  { id: 'sh-1', name: 'Baby Guinness', description: 'Sweet layered shot.', price: 16, category: 'shot', ingredients: ['Kahlua', 'Bailey\'s'], isFood: false },
  { id: 'sh-2', name: 'Sambuca', description: 'Anise-flavored liqueur.', price: 27, category: 'shot', ingredients: ['Sambuca', 'Coffee Beans'], isFood: false },
  { id: 'sh-3', name: 'Jager Zombie Brain', description: 'Spooky and strong.', price: 17, category: 'shot', ingredients: ['Peach Schnapps', 'Jägermeister', 'Bailey\'s', 'Grenadine'], isFood: false },
  { id: 'sh-4', name: 'Vanilla Zombie Brain', description: 'Sweet spooky shot.', price: 17, category: 'shot', ingredients: ['Peach Schnapps', 'Vanilla Vodka', 'Bailey\'s', 'Grenadine'], isFood: false },
  { id: 'sh-5', name: 'B-52', description: 'Classic layered shot.', price: 16, category: 'shot', ingredients: ['Kahlua', 'Bailey\'s', 'Cointreau'], isFood: false },
  { id: 'sh-6', name: 'Alien Brain', description: 'Colorful shot.', price: 17, category: 'shot', ingredients: ['Peach Schnapps', 'Blue Curaçao', 'Bailey\'s', 'Grenadine'], isFood: false },

  // --- SHOTS SET (4 shots / 6 shots) ---
  { id: 'shs-1', name: 'Kamikadze', description: 'Vodka, Blue Curaçao, Lemon juice.', price: 29, priceLabel: '4 shots', price2: 43.5, price2Label: '6 shots', category: 'shots_set', ingredients: ['Vodka', 'Blue Curaçao', 'Lemon juice'], isFood: false },
  { id: 'shs-2', name: 'Lavender Drop', description: 'Gin, Lavender Syrup, Lemon juice, Simple Syrup.', price: 34, priceLabel: '4 shots', price2: 51, price2Label: '6 shots', category: 'shots_set', ingredients: ['Gin', 'Lavender Syrup', 'Lemon juice', 'Simple Syrup'], isFood: false },
  { id: 'shs-3', name: 'Fiery Mango', description: 'Tequila, Passion Fruit Purée, Cointreau, Tabasco.', price: 33, priceLabel: '4 shots', price2: 49.5, price2Label: '6 shots', category: 'shots_set', ingredients: ['Tequila', 'Passion Fruit Purée', 'Cointreau', 'Tabasco'], isFood: false },

  // --- VODKA (40 ml / 60 ml) ---
  { id: 'v-1', name: 'Finlandia', description: 'Premium vodka.', price: 15, priceLabel: '40 ml', price2: 22.5, price2Label: '60 ml', category: 'vodka', ingredients: [], isFood: false },
  { id: 'v-2', name: 'Absolut', description: 'Swedish vodka.', price: 16, priceLabel: '40 ml', price2: 24, price2Label: '60 ml', category: 'vodka', ingredients: [], isFood: false },
  { id: 'v-3', name: 'Belvedere', description: 'Luxury vodka.', price: 45, priceLabel: '40 ml', price2: 67.5, price2Label: '60 ml', category: 'vodka', ingredients: [], isFood: false },
  { id: 'v-4', name: 'Grey Goose', description: 'French luxury vodka.', price: 50, priceLabel: '40 ml', price2: 75, price2Label: '60 ml', category: 'vodka', ingredients: [], isFood: false },

  // --- MOCKTAILS ---
  { id: 'm-1', name: 'Virgin Mojito', description: 'Refreshing non-alcoholic.', price: 20, category: 'mocktail', ingredients: ['Lime', 'Fresh Mint', 'Sparkling Water'], isFood: false },
  { id: 'm-2', name: 'Passion Martini', description: 'Fruity non-alcoholic.', price: 23, category: 'mocktail', ingredients: ['Green Tea', 'Passion Fruit Purée', 'Lemon Juice'], isFood: false },
  { id: 'm-3', name: 'Bitter Spritz', description: 'Bitter non-alcoholic.', price: 21, category: 'mocktail', ingredients: ['Bitter Syrup', 'Tonic'], isFood: false },

  // --- SIGNATURE BURGERS (FOOD) ---
  { id: 'fb-1', name: 'Barrel BBQ Burger', description: '180 g beef patty on a brioche bun with double Cheddar, crispy bacon, romaine lettuce, tomato, red onion, smoky mayo and our signature Barrel BBQ sauce. Served with fries, coleslaw and ketchup.', price: 52, category: 'burger', ingredients: ['180g beef patty', 'brioche bun', 'double Cheddar', 'crispy bacon', 'romaine lettuce', 'tomato', 'red onion', 'smoky mayo', 'Barrel BBQ sauce'], isFood: true },
  { id: 'fb-2', name: 'Double Smash Cheeseburger', description: '2 x 90 g smashed beef patties, brioche bun, Cheddar, red onion, romaine lettuce and our Barrel Special Sauce. Served with fries, coleslaw and ketchup.', price: 47, category: 'burger', ingredients: ['2x90g smashed beef', 'brioche bun', 'Cheddar', 'red onion', 'romaine lettuce', 'Barrel Special Sauce'], isFood: true },
  { id: 'fb-3', name: 'Classic Cheeseburger', description: '180 g beef patty with double Cheddar, romaine lettuce, tomato, red onion and pickled gherkin, served on a brioche bun with ketchup. Served with fries, coleslaw and ketchup.', price: 45, category: 'burger', ingredients: ['180g beef patty', 'double Cheddar', 'romaine lettuce', 'tomato', 'red onion', 'pickled gherkin', 'brioche bun', 'ketchup'], isFood: true },
  { id: 'fb-4', name: 'Halloumi Burger', description: 'Grilled halloumi with grilled beetroot, rocket, parsley mayo, grilled mushrooms and salsa, served on a brioche bun. Served with fries, coleslaw and ketchup.', price: 47, category: 'burger', ingredients: ['Grilled halloumi', 'grilled beetroot', 'rocket', 'parsley mayo', 'grilled mushrooms', 'salsa', 'brioche bun'], isFood: true },
  { id: 'fb-5', name: 'Barrel Spicy Chicken Burger', description: 'Grilled chicken topped with melted Gouda, red onion, romaine lettuce, jalapeño and smoky mayo, served on a brioche bun. Served with fries, coleslaw and ketchup.', price: 49, category: 'burger', ingredients: ['Grilled chicken', 'melted Gouda', 'red onion', 'romaine lettuce', 'jalapeño', 'smoky mayo', 'brioche bun'], isFood: true },

  // --- CHICKEN & WINGS (FOOD) ---
  { id: 'fc-1', name: 'Buffalo Wings (8 pcs)', description: 'Chicken wings tossed in Buffalo sauce and finished with coriander. Served with carrot and celery sticks and blue cheese sauce.', price: 37, category: 'chicken_wings', ingredients: ['Chicken wings', 'Buffalo sauce', 'coriander', 'carrot & celery sticks', 'blue cheese sauce'], isFood: true },
  { id: 'fc-2', name: 'BBQ Wings (8 pcs)', description: 'Chicken wings tossed in BBQ sauce and finished with spring onion and toasted sesame seeds. Served with carrot and celery sticks and blue cheese sauce.', price: 37, category: 'chicken_wings', ingredients: ['Chicken wings', 'BBQ sauce', 'spring onion', 'sesame seeds', 'carrot & celery sticks', 'blue cheese sauce'], isFood: true },
  { id: 'fc-3', name: 'Honey Mustard Wings (8 pcs)', description: 'Chicken wings tossed in honey mustard sauce. Served with carrot and celery sticks and blue cheese sauce.', price: 37, category: 'chicken_wings', ingredients: ['Chicken wings', 'honey mustard sauce', 'carrot & celery sticks', 'blue cheese sauce'], isFood: true },
  { id: 'fc-4', name: 'Chicken Tenders with Fries (5 pcs)', description: 'Crispy cornflake-coated chicken tenders, served with fries and honey mustard sauce.', price: 37, category: 'chicken_wings', ingredients: ['Crispy chicken tenders', 'fries', 'honey mustard sauce'], isFood: true },

  // --- BARREL COMBOS (FOOD) ---
  { id: 'fco-1', name: 'Chicken Box', description: '3 wings, 3 chicken tenders, fries and blue cheese sauce.', price: 42, category: 'combo', ingredients: ['3 wings', '3 chicken tenders', 'fries', 'blue cheese sauce'], isFood: true },
  { id: 'fco-2', name: 'Mini Chicken Combo', description: '3 Buffalo wings, 3 Barrel BBQ wings, 3 honey mustard wings, 3 tenders, fries, 2 blue cheese sauces and honey mustard sauce.', price: 69, category: 'combo', ingredients: ['3 Buffalo wings', '3 Barrel BBQ wings', '3 honey mustard wings', '3 tenders', 'fries', '2 blue cheese sauces', 'honey mustard sauce'], isFood: true },
  { id: 'fco-3', name: 'Barrel Appetizer Combo', description: '6 mozzarella sticks, 6 jalapeño cheese bites, sweet potato fries, 6 onion rings, Barrel Special Sauce and 2 chipotle mayo sauces.', price: 79, category: 'combo', ingredients: ['6 mozzarella sticks', '6 jalapeño cheese bites', 'sweet potato fries', '6 onion rings', 'Barrel Special Sauce', '2 chipotle mayo sauces'], isFood: true },
  { id: 'fco-4', name: 'Barrel Chicken Combo', description: '6 Buffalo wings, 6 Barrel BBQ wings, 6 honey mustard wings, fries, 2 blue cheese sauces and Barrel Special Sauce.', price: 89, category: 'combo', ingredients: ['6 Buffalo wings', '6 Barrel BBQ wings', '6 honey mustard wings', 'fries', '2 blue cheese sauces', 'Barrel Special Sauce'], isFood: true },

  // --- APPETIZERS (FOOD) ---
  { id: 'fa-1', name: 'Chicken Nuggets (8 pcs)', description: 'Crispy chicken nuggets served with chipotle mayo.', price: 28, category: 'appetizer', ingredients: ['Crispy chicken nuggets', 'chipotle mayo'], isFood: true },
  { id: 'fa-2', name: 'Mozzarella Sticks (8 pcs)', description: 'Crispy mozzarella sticks served with chipotle mayo.', price: 28, category: 'appetizer', ingredients: ['Crispy mozzarella sticks', 'chipotle mayo'], isFood: true },
  { id: 'fa-3', name: 'Jalapeño Cheese Nuggets (8 pcs)', description: 'Crispy jalapeño cheese bites served with chipotle mayo.', price: 28, category: 'appetizer', ingredients: ['Crispy jalapeño cheese bites', 'chipotle mayo'], isFood: true },
  { id: 'fa-4', name: 'Cheese Nachos', description: 'Crispy nachos topped with grated Gouda, red onion and fresh coriander, served with lime.', price: 29, category: 'appetizer', ingredients: ['Crispy nachos', 'grated Gouda', 'red onion', 'fresh coriander', 'lime'], isFood: true },
  { id: 'fa-5', name: 'Onion Rings (10 pcs)', description: 'Crispy onion rings served with chipotle mayo.', price: 21, category: 'appetizer', ingredients: ['Crispy onion rings', 'chipotle mayo'], isFood: true },
  { id: 'fa-6', name: 'Chilli con Carne', description: 'Ground beef cooked with red beans and tomatoes, topped with cheese, sour cream, fresh coriander and pickled chilli, served with crispy nachos.', price: 37, category: 'appetizer', ingredients: ['Ground beef', 'red beans', 'tomatoes', 'cheese', 'sour cream', 'fresh coriander', 'pickled chilli', 'crispy nachos'], isFood: true },

  // --- SIDES (FOOD) ---
  { id: 'fs-1', name: 'Fries', description: 'Crispy fries served with ketchup.', price: 14, category: 'side', ingredients: ['Crispy fries', 'ketchup'], isFood: true },
  { id: 'fs-2', name: 'Sweet Potato Fries', description: 'Crispy sweet potato fries served with chipotle mayo.', price: 21, category: 'side', ingredients: ['Crispy sweet potato fries', 'chipotle mayo'], isFood: true },
  { id: 'fs-3', name: 'Loaded Barrel Fries', description: 'Crispy fries loaded with cheese, crispy bacon, jalapeño and spring onion, finished with our Barrel BBQ sauce.', price: 31, category: 'side', ingredients: ['Crispy fries', 'cheese', 'crispy bacon', 'jalapeño', 'spring onion', 'Barrel BBQ sauce'], isFood: true },
  { id: 'fs-4', name: 'Jalapeño Rings', description: 'Crispy battered jalapeño rings served with blue cheese sauce.', price: 21, category: 'side', ingredients: ['Crispy battered jalapeño rings', 'blue cheese sauce'], isFood: true },
  { id: 'fs-5', name: 'Barrel Coleslaw', description: 'Our house-made white cabbage coleslaw.', price: 6, category: 'side', ingredients: ['white cabbage coleslaw'], isFood: true }
];
