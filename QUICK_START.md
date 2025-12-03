# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Supabase Database

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run** to execute the SQL script

This will create:
- `user_roles` table
- Row Level Security (RLS) policies
- Automatic role assignment trigger for new users

## 3. Create Users

### Option A: Using Supabase Dashboard (Easiest)

1. Go to **Authentication** > **Users** in Supabase Dashboard
2. Click **"Add User"** for each:
   - **superadmin@gmail.com** / **12345678** → Set role to `superadmin`
   - **admin@gmail.com** / **12345678** → Set role to `admin`
   - **user@gmail.com** / **12345678** → Set role to `user`

3. After creating users, run this SQL to set their roles:

```sql
UPDATE user_roles 
SET role = 'superadmin' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'superadmin@gmail.com');

UPDATE user_roles 
SET role = 'admin' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'admin@gmail.com');

UPDATE user_roles 
SET role = 'user' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'user@gmail.com');
```

### Option B: Using Script (Requires Service Role Key)

1. Add to your `.env` file:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

2. Run the script:
   ```bash
   node create-users.js
   ```

## 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` and test the login with any of the three accounts!

## Test Accounts

- **Superadmin**: superadmin@gmail.com / 12345678
- **Admin**: admin@gmail.com / 12345678  
- **User**: user@gmail.com / 12345678

Each user will be redirected to their role-specific dashboard after login.

