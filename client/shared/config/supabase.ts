import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database';

const supabaseUrl = 'https://yccrtlojlapvhtbmjymg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljY3J0bG9qbGFwdmh0Ym1qeW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNTgzOTYsImV4cCI6MjA0ODczNDM5Nn0.EBFFPm1gk9FC9UOs3LI4HK_O2Hk3OFq8PHm5ux8GbmQ';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check .env file and ensure it is loaded.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});