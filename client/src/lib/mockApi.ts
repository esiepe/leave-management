// src/lib/mockApi.ts

import { LeaveRequest, LeaveStatus } from '../types';
import { users, leaveTypes, leaveRequests, leaveBalances, leaveApprovals } from './mockData';

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const fetchLeaveTypes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leaveTypes);
    }, 1000);
  });
};

export const fetchLeaveRequests = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leaveRequests);
    }, 1000);
  });
};

export const fetchLeaveBalances = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leaveBalances);
    }, 1000);
  });
};

export const submitLeaveRequest = (data: Omit<LeaveRequest, 'id' | 'status' | 'createdAt'>) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newRequest = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
        status: 'pending' as LeaveStatus,
        createdAt: new Date().toISOString()
      };
      leaveRequests.push(newRequest);
      resolve(newRequest);
    }, 1000);
  });
};

export const updateLeaveStatus = (
  requestId: string, 
  status: LeaveStatus, 
  adminId: string,
  comment: string
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const request = leaveRequests.find(r => r.id === requestId);
      if (!request) {
        reject(new Error('Leave request not found'));
        return;
      }

      request.status = status;
      
      const approval = {
        id: Math.random().toString(36).substr(2, 9),
        leaveRequestId: requestId,
        approvedBy: adminId,
        status,
        comment,
        timestamp: new Date().toISOString()
      };
      
      leaveApprovals.push(approval);
      resolve(approval);
    }, 1000);
  });
};