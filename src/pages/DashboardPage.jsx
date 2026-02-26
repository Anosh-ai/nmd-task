import { useSelector } from 'react-redux';
import { BarChart3, Users, TrendingUp, DollarSign } from 'lucide-react';
import { selectCurrentUser } from '../store/slices/authSlice';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const DashboardPage = () => {
  const user = useSelector(selectCurrentUser);

  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+8%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Growth',
      value: '23.5%',
      change: '+4%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Analytics',
      value: '98.2%',
      change: '+2%',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-secondary-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-secondary-600">
          Here's what's happening with your application today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-secondary-600">
                      {stat.title}
                    </p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-secondary-900">
                        {stat.value}
                      </p>
                      <span className="ml-2 text-sm font-medium text-green-600">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-secondary-900">
                      New user registered
                    </p>
                    <p className="text-xs text-secondary-500">
                      2 minutes ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-secondary-200 hover:bg-secondary-50 transition-colors">
                <div className="font-medium text-secondary-900">Create New User</div>
                <div className="text-sm text-secondary-500">Add a new user to the system</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-secondary-200 hover:bg-secondary-50 transition-colors">
                <div className="font-medium text-secondary-900">Generate Report</div>
                <div className="text-sm text-secondary-500">Create a new analytics report</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-secondary-200 hover:bg-secondary-50 transition-colors">
                <div className="font-medium text-secondary-900">System Settings</div>
                <div className="text-sm text-secondary-500">Configure application settings</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;