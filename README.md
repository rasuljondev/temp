# Supabase Role-Based Authentication Template

A production-ready React + TypeScript template with Supabase authentication, role-based access control, reusable UI components, and dark mode support.

## 🚀 Features

- ✅ **Authentication**: Secure Supabase authentication with email/password
- ✅ **Role-Based Access**: Three user roles (Superadmin, Admin, User) with protected routes
- ✅ **Reusable Components**: Button and Alert components with simple constructor-style usage
- ✅ **Dark Mode**: System preference detection with manual toggle
- ✅ **Modern UI**: Tailwind CSS with responsive design
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Alert System**: Toast notifications with auto-close and progress indicators

## 📋 Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd <project-name>
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**Important**: 
- Use `VITE_` prefix (not `NEXT_PUBLIC_`) for Vite projects
- Get these values from your Supabase project settings
- Never commit `.env` file to version control

### 3. Supabase Database Setup

1. Open your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the entire contents of `supabase-setup.sql`
4. Click **Run** to execute

This creates:
- `user_roles` table for role management
- Row Level Security (RLS) policies
- Automatic role assignment trigger for new users

### 4. Create Test Users

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to **Authentication** > **Users** in Supabase Dashboard
2. Click **"Add User"** for each user:
   - **Superadmin**: 
     - Email: `superadmin@gmail.com`
     - Password: `12345678`
     - Auto Confirm User: ✓ (checked)
   - **Admin**: 
     - Email: `admin@gmail.com`
     - Password: `12345678`
     - Auto Confirm User: ✓ (checked)
   - **User**: 
     - Email: `user@gmail.com`
     - Password: `12345678`
     - Auto Confirm User: ✓ (checked)

3. After creating users, go to **SQL Editor** and run:

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

#### Option B: Using Script (Requires Service Role Key)

1. Ensure `SUPABASE_SERVICE_ROLE_KEY` is in your `.env` file
2. Run the script:
   ```bash
   node create-users.js
   ```

**Note**: Service role key should NEVER be exposed in client-side code.

### 5. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` and you're ready to go! 🎉

## 🧪 Test Accounts

- **Superadmin**: `superadmin@gmail.com` / `12345678`
- **Admin**: `admin@gmail.com` / `12345678`
- **User**: `user@gmail.com` / `12345678`

Each user will be redirected to their role-specific dashboard after login.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── alert/            # Alert/Toast component
│   │   └── button/           # Button component
│   ├── Layout.tsx            # Main layout with navigation
│   ├── ProtectedRoute.tsx    # Route protection
│   └── ThemeToggle.tsx       # Dark mode toggle
├── contexts/
│   ├── AuthContext.tsx       # Authentication context
│   └── ThemeContext.tsx      # Theme management
├── lib/
│   └── supabase.ts           # Supabase client
├── pages/
│   ├── MainPage.tsx          # Landing page
│   ├── LoginPage.tsx         # Login page
│   ├── Dashboard.tsx          # Dashboard router
│   └── dashboards/           # Role-specific dashboards
├── types/
│   └── auth.ts               # TypeScript types
└── App.tsx                   # Main app component
```

## 🎨 Reusable Components

### Button Component

Simple constructor-style usage:

```tsx
import { Button } from '../components/ui'

// Simple usage
<Button color="red" label="Login" />
<Button color="green" label="Save" />
<Button color="blue" label="Submit" />

// With variants and sizes
<Button variant="primary" color="purple" label="Save Changes" size="lg" />

// With icons
<Button color="green" label="Add Item" leftIcon={<PlusIcon />} />

// Loading state
<Button color="blue" label="Submit" isLoading={loading} />
```

### Alert Component

Show toast notifications anywhere:

```tsx
import { useAlert } from '../components/ui'

function MyComponent() {
  const { showSuccess, showError, showWarning, showInfo } = useAlert()

  const handleSave = async () => {
    try {
      await saveData()
      showSuccess('Data saved successfully!')
    } catch (error) {
      showError('Failed to save data')
    }
  }

  return <button onClick={handleSave}>Save</button>
}
```

## 🎭 Role-Based Access

- **Superadmin**: Full access to all features and system settings
- **Admin**: Can manage users and content
- **User**: Access to personal dashboard only

Routes are automatically protected based on user roles.

## 🌙 Dark Mode

- Automatically detects system preference on first load
- Manual toggle button in navigation
- Preference saved in localStorage
- Smooth transitions between themes

## 🛡️ Security

- Row Level Security (RLS) enabled on user_roles table
- Users can only view their own role
- Protected routes prevent unauthorized access
- Secure authentication with Supabase

## 📦 Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Authentication & Database
- **React Router** - Routing

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

- All environment variables must use `VITE_` prefix for Vite projects
- Service role key is only for server-side scripts, never expose in client code
- Default alert duration is 2 seconds (customizable)
- Button component supports 8 predefined colors and custom styling

## 🤝 Contributing

This is a template project. Feel free to customize it for your needs!

## 📄 License

MIT License - feel free to use this template for your projects.
