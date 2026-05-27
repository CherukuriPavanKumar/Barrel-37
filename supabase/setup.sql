-- 1. Create the Menu Items table
CREATE TABLE menu_items (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('whisky', 'cocktail', 'mocktail')),
  ingredients TEXT[] NOT NULL DEFAULT '{}',
  calories INTEGER,
  "sensoryNotes" TEXT,
  "isPopular" BOOLEAN DEFAULT FALSE,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create the Reservations table
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "confirmationCode" TEXT NOT NULL,
  "fullName" TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  "specialRequests" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS) to keep data safe
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- 4. Policies for Menu Items
-- Anyone can view the menu
CREATE POLICY "Menu items are viewable by everyone" ON menu_items
  FOR SELECT USING (true);

-- Only logged-in admin can add/edit/delete the menu
CREATE POLICY "Only authenticated users can insert menu items" ON menu_items
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
  
CREATE POLICY "Only authenticated users can update menu items" ON menu_items
  FOR UPDATE USING (auth.role() = 'authenticated');
  
CREATE POLICY "Only authenticated users can delete menu items" ON menu_items
  FOR DELETE USING (auth.role() = 'authenticated');

-- 5. Policies for Reservations
-- Anyone visiting the site can submit a new reservation
CREATE POLICY "Anyone can insert a reservation" ON reservations
  FOR INSERT WITH CHECK (true);

-- Only logged-in admin can read, modify, or delete reservations
CREATE POLICY "Only authenticated users can view reservations" ON reservations
  FOR SELECT USING (auth.role() = 'authenticated');
  
CREATE POLICY "Only authenticated users can update reservations" ON reservations
  FOR UPDATE USING (auth.role() = 'authenticated');
  
CREATE POLICY "Only authenticated users can delete reservations" ON reservations
  FOR DELETE USING (auth.role() = 'authenticated');

-- 6. Grant Permissions to roles
GRANT SELECT, INSERT, UPDATE, DELETE ON public.menu_items TO authenticated;
GRANT SELECT ON public.menu_items TO anon;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.reservations TO authenticated;
GRANT INSERT ON public.reservations TO anon;
