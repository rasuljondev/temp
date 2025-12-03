import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User as SupabaseUser, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { User, UserRole, AuthContextType } from '../types/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchUserRole = async (supabaseUser: SupabaseUser): Promise<UserRole> => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', supabaseUser.id)
      .single()

    if (error || !data) {
      // Default to 'user' if no role found
      return 'user'
    }

    return data.role as UserRole
  }

  const loadUser = async (session: Session | null) => {
    if (session?.user) {
      const role = await fetchUserRole(session.user)
      setUser({
        id: session.user.id,
        email: session.user.email || '',
        role,
      })
    } else {
      setUser(null)
    }
    setLoading(false)
  }

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      loadUser(session)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      loadUser(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    if (data.session?.user) {
      const role = await fetchUserRole(data.session.user)
      setUser({
        id: data.session.user.id,
        email: data.session.user.email || '',
        role,
      })
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw error
    }
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

