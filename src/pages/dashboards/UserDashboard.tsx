import { useAuth } from '../../contexts/AuthContext'

export const UserDashboard = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              User Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome, {user?.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">My Profile</h2>
              <p className="text-gray-600 dark:text-gray-300">View and edit your profile information</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">My Activities</h2>
              <p className="text-gray-600 dark:text-gray-300">View your recent activities</p>
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">User Features</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                Access to personal dashboard
              </li>
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                View your own data and activities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                Update profile information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

