import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../store/slices/authSlice';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;