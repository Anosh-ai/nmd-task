import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import withAuth from '../hoc/withAuth';
import withRole from '../hoc/withRole';

const AdminLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-secondary-50">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Admin Access Required
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>You are accessing the admin panel. This area is restricted to administrators only.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default withAuth(withRole(['admin'])(AdminLayout));