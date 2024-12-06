import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Calendar, Home, LogOut, Users } from 'lucide-react';

export function Layout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900">
                <Home className="h-6 w-6 mr-2" />
                <span className="font-semibold">HR Leave Management</span>
              </Link>
            </div>
            {user && (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/leave-requests"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Calendar className="h-5 w-5 inline mr-1" />
                  Leave Requests
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/employees"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Users className="h-5 w-5 inline mr-1" />
                    Employees
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut className="h-5 w-5 inline mr-1" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}