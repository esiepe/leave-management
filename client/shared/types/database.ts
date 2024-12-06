export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          role: 'admin' | 'employee'
          department: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name: string
          role?: 'admin' | 'employee'
          department: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'admin' | 'employee'
          department?: string
          updated_at?: string
        }
      }
      leave_types: {
        Row: {
          id: string
          name: string
          description: string
          days_per_year: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          days_per_year: number
          created_at?: string
        }
        Update: {
          name?: string
          description?: string
          days_per_year?: number
        }
      }
      leave_requests: {
        Row: {
          id: string
          user_id: string
          leave_type_id: string
          start_date: string
          end_date: string
          reason: string
          status: 'pending' | 'approved' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          leave_type_id: string
          start_date: string
          end_date: string
          reason: string
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: 'pending' | 'approved' | 'rejected'
          updated_at?: string
        }
      }
      leave_balances: {
        Row: {
          id: string
          user_id: string
          leave_type_id: string
          total_days: number
          used_days: number
          year: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          leave_type_id: string
          total_days: number
          used_days?: number
          year: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          total_days?: number
          used_days?: number
          updated_at?: string
        }
      }
    }
    Views: {
      leave_balances_view: {
        Row: {
          user_id: string
          leave_type_id: string
          leave_type_name: string
          total_days: number
          used_days: number
          remaining_days: number
          year: number
        }
      }
    }
    Functions: {
      calculate_leave_duration: {
        Args: {
          start_date: string
          end_date: string
        }
        Returns: number
      }
    }
  }
}