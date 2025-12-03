# How to Create Users in Supabase

## Method 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Users**
3. Click **"Add User"** for each user:

   **User 1: Superadmin**
   - Email: `superadmin@gmail.com`
   - Password: `12345678`
   - Auto Confirm User: ✓ (checked)

   **User 2: Admin**
   - Email: `admin@gmail.com`
   - Password: `12345678`
   - Auto Confirm User: ✓ (checked)

   **User 3: User**
   - Email: `user@gmail.com`
   - Password: `12345678`
   - Auto Confirm User: ✓ (checked)

4. After creating all users, go to **SQL Editor** and run:

```sql
-- Get user IDs
SELECT id, email FROM auth.users WHERE email IN ('superadmin@gmail.com', 'admin@gmail.com', 'user@gmail.com');

-- Update roles (replace USER_ID with actual IDs from above query)
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

## Method 2: Using Supabase Management API

If you have the Supabase Service Role Key, you can use the `create-users.js` script:

1. Add to your `.env` file:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

2. Install dotenv (if not already installed):
   ```bash
   npm install dotenv
   ```

3. Run the script:
   ```bash
   node create-users.js
   ```

**Note:** The service role key should NEVER be exposed in client-side code. Only use it in secure server-side environments.

