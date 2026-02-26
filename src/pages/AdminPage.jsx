import { Shield, Settings, Database, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const AdminPage = () => {
  const adminActions = [
    {
      title: 'User Management',
      description: 'Manage user accounts, roles, and permissions',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      action: 'Manage Users',
    },
    {
      title: 'System Settings',
      description: 'Configure application settings and preferences',
      icon: Settings,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      action: 'Open Settings',
    },
    {
      title: 'Database Management',
      description: 'Monitor and manage database operations',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      action: 'View Database',
    },
    {
      title: 'Security Center',
      description: 'Monitor security events and manage access controls',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      action: 'Security Dashboard',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-secondary-900">Admin Panel</h1>
        <p className="text-secondary-600">
          Administrative tools and system management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${action.bgColor}`}>
                    <Icon className={`h-6 w-6 ${action.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {action.description}
                    </p>
                    <Button variant="outline" size="sm">
                      {action.action}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-green-700">Uptime</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1,234</div>
              <div className="text-sm text-blue-700">Active Users</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">45ms</div>
              <div className="text-sm text-purple-700">Response Time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;