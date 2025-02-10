import { useState } from 'react';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import MedicalLogo from '../../Shared/Components/MedicalLogo';

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signupSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      signupSchema.parse(formData);
      setErrors({});
      // TODO: Handle signup logic
      // Redirect to onboarding after successful signup
      navigate('/onboarding');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce((acc, err) => ({
          ...acc,
          [err.path[0]]: err.message
        }), {});
        setErrors(formattedErrors);
      }
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

        <h2 className='text-center text-3xl font-extrabold text-gray-900 dark:text-white mb-8'>
          Create an account
        </h2>
        
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='fullName' className='block text-sm font-medium text-gray-900 dark:text-white'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500'
            />
            {errors.fullName && (
              <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-900 dark:text-white'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-900 dark:text-white'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500'
            />
            {errors.password && (
              <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-900 dark:text-white'>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500'
            />
            {errors.confirmPassword && (
              <p className='mt-1 text-sm text-red-600 dark:text-red-400'>{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Sign up
          </button>
        </form>

        <div className='text-center'>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Already have an account?{' '}
            <Link
              to="/login"
              className='font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;