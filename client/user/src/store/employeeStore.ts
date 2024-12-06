import { create } from 'zustand';
import { User } from '../types';

interface EmployeeState {
  employees: User[];
  setEmployees: (employees: User[]) => void;
  activateEmployee: (id: string) => void;
  deactivateEmployee: (id: string) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  setEmployees: (employees) => set({ employees }),
  activateEmployee: (id) =>
    set((state) => ({
      employees: state.employees.map((employee) =>
        employee.id === id ? { ...employee, active: true } : employee
      ),
    })),
  deactivateEmployee: (id) =>
    set((state) => ({
      employees: state.employees.map((employee) =>
        employee.id === id ? { ...employee, active: false } : employee
      ),
    })),
}));