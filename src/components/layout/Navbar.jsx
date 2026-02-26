import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings } from 'lucide-react';
import { logout, selectCurrentUser } from '../../store/slices/authSlice';
import Button from '../ui/Button';

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary-600">
                React Boilerplate
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-secondary-500" />
              <span className="text-sm font-medium text-secondary-700">
                {user?.name}
              </span>
              <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                {user?.role}
              </span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/settings')}
            >
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;