import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import type { User } from '../types';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const { login, logout } = useAuthStore();

  useEffect(() => {
    let mounted = true;
    
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (mounted) {
          handleSession(session);
        }
      })
      .catch(error => {
        console.error('Auth error:', error);
        setLoading(false);
      });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (mounted) {
          await handleSession(session);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleSession = async (session: any) => {
    if (session) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profile) {
        login({
          id: session.user.id,
          email: session.user.email!,
          name: profile.name,
          role: profile.role,
          department: profile.department,
        });
      }
    } else {
      logout();
    }
    setLoading(false);
  };

  return { loading };
}