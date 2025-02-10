import { useState } from 'react';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import MedicalLogo from '../../Shared/Components/MedicalLogo';

interface LoginProps {
  onSubmit?: (username: string, password: string) => void;
}

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const validatedData = loginSchema.parse(formData);
      setErrors({});
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login attempt with:', validatedData);
      navigate('/dashboard'); // Navigate to dashboard after successful login
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce((acc, err) => ({
          ...acc,
          [err.path[0]]: err.message
        }), {});
        setErrors(formattedErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'>
        <div>
          <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
            <MedicalLogo className="w-12 h-12" />
          </div>
          <h1 className="mt-3 text-center text-2xl font-bold text-blue-600 dark:text-blue-400">MedAIvo</h1>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">Your Medical AI Assistant</p>
        </div>
        
        <h2 className='text-center text-3xl font-extrabold text-gray-900 dark:text-white mt-8'>
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500'
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500'
              />
              {errors.password && (
                <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Sign in'}
          </button>

          <div className='text-center'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className='font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400'
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
