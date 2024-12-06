import React, { useEffect } from 'react';
import { useEmployeeStore } from '../store/employeeStore';
import { EmployeeList } from '../components/employees/EmployeeList';
import { UserPlus } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function EmployeesPage() {
  const { employees, setEmployees, activateEmployee, deactivateEmployee } = useEmployeeStore();

  useEffect(() => {
    // Mock data - replace with actual API call
    setEmployees([
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'employee',
        department: 'Engineering',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'admin',
        department: 'HR',
      },
      {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'employee',
        department: 'Marketing',
      },
    ]);
  }, [setEmployees]);

  const handleActivate = (id: string) => {
    activateEmployee(id);
    // Add API call here
  };

  const handleDeactivate = (id: string) => {
    deactivateEmployee(id);
    // Add API call here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <EmployeeList
          employees={employees}
          onActivate={handleActivate}
          onDeactivate={handleDeactivate}
        />
      </div>
    </div>
  );
}