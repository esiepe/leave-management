import React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';

const SignUp: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 dark:bg-boxdark lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <Link to="/" className="flex justify-center">
          <img className="hidden dark:block" src={Logo} alt="Logo" />
          <img className="dark:hidden" src={LogoDark} alt="Logo" />
        </Link> */}
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black dark:text-white">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-black outline-none focus:border-primary focus:ring-primary dark:border-strokedark dark:text-white dark:focus:border-primary"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor='department' className='block text-sm font-medium text-black dark:text-white'>
              Department
            </label>
            <div className="mt-2">
              <select
                id='department'
                name='department'
                className='block w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-black outline-none focus:border-primary focus:ring-primary dark:border-strokedark dark:text-white dark:focus:border-primary'
              >
                <option value=''>Select Department</option>
                <option value='1'>Engineering</option>
                <option value='2'>Design</option>
                <option value='3'>Marketing</option>
                <option value='4'>Sales</option>
                <option value='5'>HR</option>
                <option value='6'>Finance</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-black outline-none focus:border-primary focus:ring-primary dark:border-strokedark dark:text-white dark:focus:border-primary"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black dark:text-white">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-black outline-none focus:border-primary focus:ring-primary dark:border-strokedark dark:text-white dark:focus:border-primary"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/auth/signin" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
