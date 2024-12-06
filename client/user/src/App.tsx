import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { LeaveRequestsPage } from './pages/LeaveRequestsPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { AuthProvider } from './components/auth/AuthProvider';
import { useAuthStore } from './store/authStore';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  return user?.role === 'admin' ? <>{children}</> : <Navigate to="/dashboard" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/leave-requests" element={<LeaveRequestsPage />} />
            <Route
              path="/employees"
              element={
                <AdminRoute>
                  <EmployeesPage />
                </AdminRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;