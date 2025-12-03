import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { SuperAdminDashboard } from './dashboards/SuperAdminDashboard'
import { AdminDashboard } from './dashboards/AdminDashboard'
import { UserDashboard } from './dashboards/UserDashboard'

export const Dashboard = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
        <div className="text-lg text-gray-900 dark:text-white">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  switch (user.role) {
    case 'superadmin':
      return <SuperAdminDashboard />
    case 'admin':
      return <AdminDashboard />
    case 'user':
      return <UserDashboard />
    default:
      return <Navigate to="/login" replace />
  }
}

