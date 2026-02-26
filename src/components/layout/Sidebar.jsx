import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  FileText,
  Shield
} from 'lucide-react';
import { selectCurrentUser } from '../../store/slices/authSlice';
import { cn } from '../../utils/cn';

const Sidebar = () => {
  const user = useSelector(selectCurrentUser);
  const isAdmin = user?.role === 'admin';

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Reports', href: '/reports', icon: FileText },
    ...(isAdmin ? [
      { name: 'Users', href: '/users', icon: Users },
      { name: 'Admin Panel', href: '/admin', icon: Shield },
    ] : []),
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col w-64 bg-white shadow-sm border-r border-secondary-200">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                  )
                }
              >
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;