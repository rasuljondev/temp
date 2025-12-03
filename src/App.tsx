import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { AlertProvider } from './components/ui'
import { Layout } from './components/Layout'
import { PageTransition } from './components/PageTransition'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './pages/Dashboard'

function AppRoutes() {
  const location = useLocation()

  return (
    <Layout>
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </PageTransition>
    </Layout>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AuthProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  )
}

export default App

