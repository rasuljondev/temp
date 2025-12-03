/**
 * Script to create users in Supabase
 * 
 * This script uses the Supabase Management API to create users.
 * You need to set your Supabase Service Role Key in the SUPABASE_SERVICE_ROLE_KEY environment variable.
 * 
 * WARNING: Never expose your service role key in client-side code!
 * This script should only be run server-side or in a secure environment.
 * 
 * Usage:
 * 1. Set SUPABASE_SERVICE_ROLE_KEY in your environment
 * 2. Install dotenv: npm install dotenv
 * 3. Run: node create-users.js
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing required environment variables:')
  console.error('VITE_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
  console.error('SUPABASE_SERVICE_ROLE_KEY:', serviceRoleKey ? '✓' : '✗')
  process.exit(1)
}

// Use service role key for admin operations
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const users = [
  {
    email: 'superadmin@gmail.com',
    password: '12345678',
    role: 'superadmin'
  },
  {
    email: 'admin@gmail.com',
    password: '12345678',
    role: 'admin'
  },
  {
    email: 'user@gmail.com',
    password: '12345678',
    role: 'user'
  }
]

async function createUsers() {
  console.log('Creating users...\n')

  for (const userData of users) {
    try {
      // Check if user already exists
      const { data: existingUsers } = await supabase.auth.admin.listUsers()
      const existingUser = existingUsers.users.find(u => u.email === userData.email)

      if (existingUser) {
        console.log(`User ${userData.email} already exists. Updating role...`)
        
        // Update role
        const { error: roleError } = await supabase
          .from('user_roles')
          .upsert({
            user_id: existingUser.id,
            role: userData.role
          }, {
            onConflict: 'user_id'
          })

        if (roleError) {
          console.error(`Error updating role for ${userData.email}:`, roleError.message)
        } else {
          console.log(`✓ Role updated for ${userData.email} to ${userData.role}`)
        }
      } else {
        // Create new user
        const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
          email: userData.email,
          password: userData.password,
          email_confirm: true
        })

        if (createError) {
          console.error(`Error creating ${userData.email}:`, createError.message)
          continue
        }

        console.log(`✓ Created user: ${userData.email}`)

        // Set role
        const { error: roleError } = await supabase
          .from('user_roles')
          .insert({
            user_id: newUser.user.id,
            role: userData.role
          })

        if (roleError) {
          console.error(`Error setting role for ${userData.email}:`, roleError.message)
        } else {
          console.log(`✓ Role set to ${userData.role} for ${userData.email}\n`)
        }
      }
    } catch (error) {
      console.error(`Error processing ${userData.email}:`, error.message)
    }
  }

  console.log('\nDone!')
}

createUsers().catch(console.error)

