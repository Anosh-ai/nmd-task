import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/api/authApi';
import { setCredentials } from '../../store/slices/authSlice';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const result = await login(formData).unwrap();
      dispatch(setCredentials(result));
      navigate('/dashboard');
    } catch (error) {
      setErrors({ submit: 'Invalid email or password' });
    }
  };

  const fillDemoCredentials = (type) => {
    if (type === 'admin') {
      setFormData({
        email: 'admin@demo.com',
        password: 'admin123'
      });
    } else {
      setFormData({
        email: 'user@demo.com',
        password: 'user123'
      });
    }
    setErrors({});
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
          />
          
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
          />

          {errors.submit && (
            <p className="text-sm text-red-600">{errors.submit}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            loading={isLoading}
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 space-y-2">
          <p className="text-sm text-secondary-600 text-center">Demo Credentials:</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => fillDemoCredentials('admin')}
            >
              Admin Login
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => fillDemoCredentials('user')}
            >
              User Login
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;