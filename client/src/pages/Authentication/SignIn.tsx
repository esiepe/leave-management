import React from 'react';
import { Link } from 'react-router-dom';
// import LogoDark from '../../images/logo/logo-dark.svg';
// import Logo from '../../images/logo/logo.svg';

const SignIn: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 dark:bg-boxdark lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <Link to="/" className="flex justify-center">
          <img className="hidden dark:block" src={Logo} alt="Logo" />
          <img className="dark:hidden" src={LogoDark} alt="Logo" />
        </Link> */}
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black dark:text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
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
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-black dark:text-white">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm font-semibold text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-black outline-none focus:border-primary focus:ring-primary dark:border-strokedark dark:text-white dark:focus:border-primary"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Not a member?{' '}
          <Link to="/auth/signup" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
