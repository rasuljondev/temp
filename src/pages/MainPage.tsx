import { useAuth } from '../contexts/AuthContext'
import { ButtonLink, Button, useAlert } from '../components/ui'

export const MainPage = () => {
  const { user } = useAuth()
  const { showSuccess, showError, showWarning, showInfo } = useAlert()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Supabase Role-Based App
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            A secure application with role-based access control using Supabase authentication
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Features</h2>
            <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                Secure authentication with Supabase
              </li>
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                Role-based access control (Superadmin, Admin, User)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                Protected routes and dashboards
              </li>
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                Modern UI with Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                Light & Dark mode support
              </li>
            </ul>
          </div>

          {/* Alert Test Buttons */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Test Alerts</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                color="green"
                label="Test Success"
                onClick={() => showSuccess('Operation completed successfully!')}
              />
              <Button
                color="red"
                label="Test Error"
                onClick={() => showError('Something went wrong! Please try again.')}
              />
              <Button
                color="yellow"
                label="Test Warning"
                onClick={() => showWarning('Please check your input before proceeding.')}
              />
              <Button
                color="blue"
                label="Test Info"
                onClick={() => showInfo('Here is some useful information for you.')}
              />
            </div>
          </div>

          {user ? (
            <ButtonLink
              to="/dashboard"
              variant="primary"
              size="lg"
            >
              Go to Dashboard
            </ButtonLink>
          ) : (
            <ButtonLink
              to="/login"
              variant="primary"
              size="lg"
            >
              Get Started - Login
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  )
}

