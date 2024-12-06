import { create } from 'zustand';
import { LeaveRequest, LeaveType, LeaveBalance } from '../types';

interface LeaveState {
  leaveTypes: LeaveType[];
  leaveRequests: LeaveRequest[];
  leaveBalances: LeaveBalance[];
  setLeaveTypes: (types: LeaveType[]) => void;
  addLeaveRequest: (request: LeaveRequest) => void;
  updateLeaveRequest: (id: string, status: LeaveRequest['status']) => void;
  setLeaveBalances: (balances: LeaveBalance[]) => void;
}

export const useLeaveStore = create<LeaveState>((set) => ({
  leaveTypes: [],
  leaveRequests: [],
  leaveBalances: [],
  setLeaveTypes: (types) => set({ leaveTypes: types }),
  addLeaveRequest: (request) =>
    set((state) => ({ leaveRequests: [...state.leaveRequests, request] })),
  updateLeaveRequest: (id, status) =>
    set((state) => ({
      leaveRequests: state.leaveRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      ),
    })),
  setLeaveBalances: (balances) => set({ leaveBalances: balances }),
}));