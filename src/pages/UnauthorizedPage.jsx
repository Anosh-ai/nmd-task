import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">
            Access Denied
          </h2>
          <p className="text-secondary-600 mb-6">
            You don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/dashboard')}
              className="w-full"
            >
              Go to Dashboard
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="w-full"
            >
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnauthorizedPage;