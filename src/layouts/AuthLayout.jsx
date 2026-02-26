import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-900">
            React Boilerplate
          </h2>
          <p className="mt-2 text-sm text-secondary-600">
            Welcome to your application
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;