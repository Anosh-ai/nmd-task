import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../store/slices/authSlice';

const withRole = (allowedRoles) => (WrappedComponent) => {
  return function RoleBasedComponent(props) {
    const user = useSelector(selectCurrentUser);
    
    if (!user || !allowedRoles.includes(user.role)) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRole;