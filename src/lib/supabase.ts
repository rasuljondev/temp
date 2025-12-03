import { createClient } from '@supabase/supabase-js'

// Vite requires VITE_ prefix for environment variables to be exposed to the client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  const missing = []
  if (!supabaseUrl) missing.push('VITE_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL')
  if (!supabaseAnonKey) missing.push('VITE_SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  
  throw new Error(
    `Missing Supabase environment variables: ${missing.join(', ')}\n` +
    `Note: In Vite, environment variables must be prefixed with VITE_ to be exposed to the client.\n` +
    `Please update your .env file to use VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY`
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

