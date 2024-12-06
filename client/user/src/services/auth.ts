import { supabase } from '../config/supabase';
import type { AuthError, User as SupabaseUser } from '@supabase/supabase-js';
import type { User } from '../types';
import { hashPassword, verifyPassword } from '../utils/crypto';

interface LoginResponse {
  user: User | null;
  error: Error | null;
}

export async function signInWithEmail(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: email.toLowerCase().trim(),
        password 
      }),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const user = await response.json();
    return { user, error: null };
  } catch (error) {
    return { user: null, error: error as Error };
  }
}

export async function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

export async function signInWithMicrosoft() {
  return supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getCurrentUser(): Promise<User | null> {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user) {
    return null;
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (!profile) {
    return null;
  }

  return {
    id: session.user.id,
    email: session.user.email!,
    name: profile.name,
    role: profile.role,
    department: profile.department,
  };
}