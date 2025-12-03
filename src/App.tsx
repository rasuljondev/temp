import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { AlertProvider } from './components/ui'
import { Layout } from './components/Layout'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AuthProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Layout>
          </Router>
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  )
}

export default App

