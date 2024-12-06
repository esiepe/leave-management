import React from 'react';
import { User } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, Building2, UserCircle } from 'lucide-react';

interface EmployeeListProps {
  employees: User[];
  onActivate?: (id: string) => void;
  onDeactivate?: (id: string) => void;
}

export function EmployeeList({
  employees,
  onActivate,
  onDeactivate,
}: EmployeeListProps) {
  return (
    <Card>
      <h2 className="text-lg font-medium text-gray-900 mb-6">Employee List</h2>
      <div className="space-y-6">
        {employees.length === 0 ? (
          <p className="text-gray-500 text-center">No employees found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center">
                      <UserCircle className="h-4 w-4 mr-1" />
                      {employee.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {employee.email}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      {employee.department}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                        employee.role === 'admin'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {employee.role}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button
                    variant="secondary"
                    onClick={() => onDeactivate?.(employee.id)}
                    className="flex-1 text-sm"
                  >
                    Deactivate
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => onActivate?.(employee.id)}
                    className="flex-1 text-sm"
                  >
                    Activate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}