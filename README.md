# Supabase Role-Based Authentication App

A React + TypeScript application with Tailwind CSS and Supabase role-based authentication.

## Features

- 🔐 Secure authentication with Supabase
- 👥 Role-based access control (Superadmin, Admin, User)
- 🎨 Modern UI with Tailwind CSS
- 🛡️ Protected routes and dashboards
- 📱 Responsive design

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout with navigation
│   └── ProtectedRoute.tsx  # Route protection component
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── lib/                # Utilities and configurations
│   └── supabase.ts     # Supabase client setup
├── pages/              # Page components
│   ├── MainPage.tsx    # Landing page
│   ├── LoginPage.tsx   # Login page
│   ├── Dashboard.tsx   # Dashboard router
│   └── dashboards/     # Role-specific dashboards
│       ├── SuperAdminDashboard.tsx
│       ├── AdminDashboard.tsx
│       └── UserDashboard.tsx
├── types/              # TypeScript type definitions
│   └── auth.ts         # Authentication types
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

**IMPORTANT:** This is a Vite project, so environment variables must be prefixed with `VITE_` to be exposed to the client.

Make sure your `.env` file contains:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**Note:** If you're using `NEXT_PUBLIC_` prefix (from Next.js), you need to change it to `VITE_` for this Vite project to work properly.

### 3. Supabase Database Setup

1. Open your Supabase project dashboard
2. Go to SQL Editor
3. Run the SQL script from `supabase-setup.sql` to create the `user_roles` table and set up RLS policies

### 4. Create Users

#### Option A: Using Supabase Dashboard
1. Go to Authentication > Users
2. Click "Add User" for each user:
   - **Superadmin**: superadmin@gmail.com / 12345678
   - **Admin**: admin@gmail.com / 12345678
   - **User**: user@gmail.com / 12345678

3. After creating users, get their IDs:
   ```sql
   SELECT id, email FROM auth.users WHERE email IN ('superadmin@gmail.com', 'admin@gmail.com', 'user@gmail.com');
   ```

4. Update their roles:
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

#### Option B: Using Supabase Management API
You can create users programmatically using the Supabase Management API.

### 5. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Test Accounts

- **Superadmin**: superadmin@gmail.com / 12345678
- **Admin**: admin@gmail.com / 12345678
- **User**: user@gmail.com / 12345678

## Role-Based Access

- **Superadmin**: Full access to all features
- **Admin**: Can manage users and content
- **User**: Access to personal dashboard only

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Authentication + Database)
- React Router DOM

