import { create } from 'zustand';
import { User } from '../types';
import { signInWithEmail } from '../services/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const { user, error } = await signInWithEmail(email, password);
      if (error) throw error;
      set({ user, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('auth_token');
  },
}));