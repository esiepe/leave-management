import supabase from '../types/supabase';
import { User, AdminUser, EmployeeUser, BaseUser } from '../types';
import { Database } from '../types/database';

type LoginResponse = {
  user: User | null;
  error: string | null;
};

type Profile = Database['public']['Tables']['profiles']['Row'];

export async function signInWithEmail(email: string, password: string): Promise<LoginResponse> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase().trim(),
      password,
    });

    if (error || !data.session) {
      throw new Error('Invalid credentials');
    }

    // Fetch user profile
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profileError || !profileData) {
      throw new Error('User profile not found');
    }

    const user = mapProfileToUser(profileData as Profile);
    return { user, error: null };

  } catch (err) {
    console.error('Error during sign-in:', err);
    return { user: null, error: (err as Error).message };
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
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !session) {
    console.error('Error fetching session:', sessionError);
    return null;
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (profileError || !profileData) {
    console.error('Error fetching profile:', profileError);
    return null;
  }

  const user = mapProfileToUser(profileData as Profile);
  return user;
}

function mapProfileToUser(profileData: Profile): User {
  // Base user properties
  const baseUser: BaseUser = {
    id: profileData.id,
    email: profileData.email,
    name: profileData.name,
    role: profileData.role,
    status: profileData.status,
    createdAt: profileData.created_at,
    updatedAt: profileData.updated_at,
  };

  if (profileData.role === 'admin') {
    const adminUser: AdminUser = {
      ...baseUser,
      role: 'admin',
      permissions: profileData.permissions || [],
    };
    return adminUser;
  } else if (profileData.role === 'employee') {
    const employeeUser: EmployeeUser = {
      ...baseUser,
      role: 'employee',
      department: profileData.department || '',
      position: profileData.position || '',
      employeeId: profileData.employee_id || '',
      joiningDate: profileData.joining_date || baseUser.createdAt,
      reportingTo: profileData.reporting_to || '',
    };
    return employeeUser;
  } else {
    throw new Error(`Unknown user role: ${profileData.role}`);
  }
}