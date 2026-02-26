import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className="space-y-6">
      <LoginForm />
      <div className="text-center">
        <p className="text-sm text-secondary-600">
          Don't have an account?{' '}
          <Link 
            to="/register" 
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;