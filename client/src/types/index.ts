// src/types/index.ts

// Base user interface with common fields
interface BaseUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';  // Common field for role discrimination
  status: 'active' | 'pending' | 'inactive';
  createdAt: string;
  updatedAt?: string;
  profilePic?: string;
}

// Admin-specific interface
interface AdminUser extends BaseUser {
  role: 'admin';
  permissions: string[];
}

// Employee-specific interface
interface EmployeeUser extends BaseUser {
  role: 'employee';
  department: string;
  position: string;
  employeeId: string;
  joiningDate: string;
  reportingTo?: string;
}

// Discriminated union of User types
type User = AdminUser | EmployeeUser;

// Type guards for User
function isAdmin(user: User): user is AdminUser {
  return user.role === 'admin';
}

function isEmployee(user: User): user is EmployeeUser {
  return user.role === 'employee';
}

// LeaveType interface
interface LeaveType {
  id: string;
  name: string;
  description: string;
  daysPerYear: number;
  requiresApproval: boolean;
  minDaysNotice: number;
  maxConsecutiveDays?: number;
  allowsCarryOver: boolean;
  carryOverLimit?: number;
  applicableDepartments: string[];
}

// LeaveBalance interface
interface LeaveBalance {
  userId: string;
  leaveTypeId: string;
  total: number;
  used: number;
  remaining: number;
}

// LeaveRequest interface
interface LeaveRequest {
  id: string;
  userId: string;
  leaveTypeId: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

// LeaveApproval interface
interface LeaveApproval {
  id: string;
  leaveRequestId: string;
  approvedBy: string; // Admin user ID
  status: 'approved' | 'rejected';
  comment: string;
  timestamp: string;
}

// Export all interfaces and type guards
export type {
  BaseUser,
  AdminUser,
  EmployeeUser,
  User,
  LeaveType,
  LeaveBalance,
  LeaveRequest,
  LeaveApproval,
};

export {
  isAdmin,
  isEmployee,
};