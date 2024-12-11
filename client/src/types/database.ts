export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'admin' | 'employee';
          status: 'active' | 'pending' | 'inactive';
          created_at: string;
          updated_at?: string;
          profile_pic?: string;
          // Admin-specific fields
          permissions?: string[];
          // Employee-specific fields
          department?: string;
          position?: string;
          employee_id?: string;
          joining_date?: string;
          reporting_to?: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role: 'admin' | 'employee';
          status: 'active' | 'pending' | 'inactive';
          created_at?: string;
          updated_at?: string;
          profile_pic?: string;
          permissions?: string[];
          department?: string;
          position?: string;
          employee_id?: string;
          joining_date?: string;
          reporting_to?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'admin' | 'employee';
          status?: 'active' | 'pending' | 'inactive';
          updated_at?: string;
          profile_pic?: string;
          permissions?: string[];
          department?: string;
          position?: string;
          employee_id?: string;
          joining_date?: string;
          reporting_to?: string;
        };
      };
      leave_types: {
        Row: {
          id: string;
          name: string;
          description: string;
          days_per_year: number;
          requires_approval: boolean;
          min_days_notice: number;
          max_consecutive_days?: number;
          allows_carry_over: boolean;
          carry_over_limit?: number;
          applicable_departments: string[];
          created_at: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          days_per_year: number;
          requires_approval: boolean;
          min_days_notice: number;
          max_consecutive_days?: number;
          allows_carry_over: boolean;
          carry_over_limit?: number;
          applicable_departments: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          days_per_year?: number;
          requires_approval?: boolean;
          min_days_notice?: number;
          max_consecutive_days?: number;
          allows_carry_over?: boolean;
          carry_over_limit?: number;
          applicable_departments?: string[];
          updated_at?: string;
        };
      };
      // Add other tables like 'leave_balances', 'leave_requests', etc.
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
}