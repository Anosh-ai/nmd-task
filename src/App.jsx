import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import AdminPage from './pages/AdminPage';
import UnauthorizedPage from './pages/UnauthorizedPage';

// Route Guards
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          
          <Route element={<PublicRoute><AuthLayout /></PublicRoute>}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analytics" element={<div className="p-8 text-center text-secondary-600">Analytics Page - Coming Soon</div>} />
            <Route path="/reports" element={<div className="p-8 text-center text-secondary-600">Reports Page - Coming Soon</div>} />
            <Route path="/settings" element={<div className="p-8 text-center text-secondary-600">Settings Page - Coming Soon</div>} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;