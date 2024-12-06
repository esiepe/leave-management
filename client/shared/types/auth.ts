export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';
  department: string;
}

export interface AuthResponse {
  user: User | null;
  error: Error | null;
}

export interface AuthStore {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}