import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import withAuth from '../hoc/withAuth';

const DashboardLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-secondary-50">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default withAuth(DashboardLayout);