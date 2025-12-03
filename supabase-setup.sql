-- Supabase Setup SQL Script
-- Run this in your Supabase SQL Editor to set up the role-based authentication system

-- Step 1: Create user_roles table to store user roles
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('superadmin', 'admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Step 2: Enable Row Level Security (RLS)
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policies for user_roles table
-- Users can read their own role
CREATE POLICY "Users can view their own role"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- Step 4: Create a function to automatically set default role for new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 5: Create trigger to automatically assign 'user' role to new signups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 6: Create function to get user role (for use in RLS policies)
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID)
RETURNS TEXT AS $$
BEGIN
  RETURN (SELECT role FROM public.user_roles WHERE user_id = user_uuid);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- MANUAL USER CREATION
-- ============================================
-- Note: You need to create these users through Supabase Auth UI or API first,
-- then update their roles using the queries below.

-- After creating users through Supabase Auth:
-- 1. Go to Authentication > Users in Supabase Dashboard
-- 2. Create the three users manually, OR use the Supabase Management API
-- 3. Then run the UPDATE queries below with the actual user IDs

-- To get user IDs after creation, run:
-- SELECT id, email FROM auth.users WHERE email IN ('superadmin@gmail.com', 'admin@gmail.com', 'user@gmail.com');

-- Then update roles (replace USER_ID with actual IDs from above query):
/*
UPDATE user_roles 
SET role = 'superadmin' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'superadmin@gmail.com');

UPDATE user_roles 
SET role = 'admin' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'admin@gmail.com');

UPDATE user_roles 
SET role = 'user' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'user@gmail.com');
*/

-- ============================================
-- ALTERNATIVE: Create users via Supabase Management API
-- ============================================
-- You can also create users programmatically using the Supabase Management API
-- or through the Supabase Dashboard > Authentication > Users > Add User

