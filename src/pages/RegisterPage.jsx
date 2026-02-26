import { Link } from 'react-router-dom';
import RegisterForm from '../components/forms/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="space-y-6">
      <RegisterForm />
      <div className="text-center">
        <p className="text-sm text-secondary-600">
          Already have an account?{' '}
          <Link 
            to="/login" 
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;