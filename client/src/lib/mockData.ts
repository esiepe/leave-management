// src/lib/mockData.ts

import { User, LeaveType, LeaveRequest, LeaveBalance, LeaveApproval } from '../types';

export const users: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    role: 'employee',
    department: 'Engineering',
    position: 'Software Engineer',
    employeeId: 'E123',
    joiningDate: '2020-01-15',
    status: 'active',
    createdAt: '2020-01-01',
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    role: 'admin',
    permissions: ['manage_users', 'approve_leaves'],
    createdAt: '2020-01-01',
  },
];

export const leaveTypes: LeaveType[] = [
  {
    id: '1',
    name: 'Annual',
    description: 'Annual Leave',
    daysPerYear: 20,
  },
  {
    id: '2',
    name: 'Sick',
    description: 'Sick Leave',
    daysPerYear: 15,
  },
  {
    id: '3',
    name: 'Unpaid',
    description: 'Unpaid Leave',
    daysPerYear: 10,
  },
  {
    id: '4',
    name: 'Public',
    description: 'Public Holidays',
    daysPerYear: 90,
  },
  {
    id: '5',
    name: 'Maternity',
    description: 'Maternity Leave',
    daysPerYear: 90,
  },
  {
    id: '6',
    name: 'Paternity',
    description: 'Paternity Leave',
    daysPerYear: 90,
  },
  {
    id: '7',
    name: 'Study',
    description: 'Study Leave',
    daysPerYear: 90,
  },
];

export const leaveRequests: LeaveRequest[] = [
  {
    id: '1',
    userId: '1',
    leaveTypeId: '1',
    startDate: '2023-01-01',
    endDate: '2023-01-05',
    reason: 'Vacation',
    status: 'pending',
    createdAt: '2022-12-01',
  },
  {
    id: '2',
    userId: '2',
    leaveTypeId: '2',
    startDate: '2023-02-01',
    endDate: '2023-02-03',
    reason: 'Medical',
    status: 'pending',
    createdAt: '2022-12-15',
  },
];

export const leaveBalances: LeaveBalance[] = [
  {
    userId: '1',
    leaveTypeId: '1',
    total: 20,
    used: 10,
    remaining: 10,
  },
  {
    userId: '1',
    leaveTypeId: '2',
    total: 15,
    used: 5,
    remaining: 10,
  },
  {
    userId: '1',
    leaveTypeId: '3',
    total: 10,
    used: 2,
    remaining: 8,
  },
  {
    userId: '2',
    leaveTypeId: '1',
    total: 20,
    used: 5,
    remaining: 15,
  },
];

export const leaveApprovals: LeaveApproval[] = [
  {
    id: '1',
    leaveRequestId: '1',
    approvedBy: '2', // Jane Smith (admin)
    status: 'approved',
    comment: 'Approved as per leave balance',
    timestamp: '2022-12-02T10:30:00Z',
  },
  {
    id: '2',
    leaveRequestId: '2',
    approvedBy: '2',
    status: 'rejected',
    comment: 'Insufficient documentation provided',
    timestamp: '2022-12-16T14:15:00Z',
  }
];