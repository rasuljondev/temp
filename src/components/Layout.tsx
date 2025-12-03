import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { ThemeToggle } from './ThemeToggle'
import { Button, ButtonLink } from './ui'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <nav className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Supabase App
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <>
                  <span className="text-gray-700 dark:text-gray-300">
                    {user.email} ({user.role})
                  </span>
                  <Link
                    to="/dashboard"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    Dashboard
                  </Link>
                  <Button
                    onClick={handleSignOut}
                    variant="danger"
                    size="md"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <ButtonLink to="/login" variant="primary" size="md">
                  Login
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

