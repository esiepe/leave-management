export type User = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';
  department: string;
};

export type LeaveType = {
  id: string;
  name: string;
  description: string;
  daysPerYear: number;
};

export type LeaveStatus = 'pending' | 'approved' | 'rejected';

export type LeaveRequest = {
  id: string;
  userId: string;
  leaveTypeId: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
  createdAt: string;
};

export type LeaveBalance = {
  userId: string;
  leaveTypeId: string;
  total: number;
  used: number;
  remaining: number;
};