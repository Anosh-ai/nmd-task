import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';


// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import AdminPage from './pages/AdminPage';
import UnauthorizedPage from './pages/UnauthorizedPage';

// Route Guards
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Header from './components/Tables/Header';
import Footer from './components/Tables/Footer';

const PublicShell = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes with Header + Footer */}
          <Route element={<PublicShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<div className="p-8 text-center text-secondary-600">About Us - Coming Soon</div>} />
            <Route path="/contact" element={<div className="p-8 text-center text-secondary-600">Contact Us - Coming Soon</div>} />
            <Route path="/how-it-works" element={<div className="p-8 text-center text-secondary-600">How It Works - Coming Soon</div>} />
            <Route path="/pricing" element={<div className="p-8 text-center text-secondary-600">Pricing - Coming Soon</div>} />
            <Route path="/for-companies" element={<div className="p-8 text-center text-secondary-600">For Companies - Coming Soon</div>} />
            <Route path="/for-recruiters" element={<div className="p-8 text-center text-secondary-600">For Recruiters - Coming Soon</div>} />
            <Route path="/faqs" element={<div className="p-8 text-center text-secondary-600">FAQs - Coming Soon</div>} />
            <Route path="/privacy" element={<div className="p-8 text-center text-secondary-600">Privacy Policy - Coming Soon</div>} />
            <Route path="/terms" element={<div className="p-8 text-center text-secondary-600">Terms - Coming Soon</div>} />
            <Route path="/compliance" element={<div className="p-8 text-center text-secondary-600">Compliance - Coming Soon</div>} />
            <Route path="/status" element={<div className="p-8 text-center text-secondary-600">Status - Coming Soon</div>} />
            <Route path="/security" element={<div className="p-8 text-center text-secondary-600">Security - Coming Soon</div>} />
            <Route path="/cookies" element={<div className="p-8 text-center text-secondary-600">Cookie Settings - Coming Soon</div>} />
          </Route>
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
