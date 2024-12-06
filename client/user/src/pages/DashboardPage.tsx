import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useLeaveStore } from '../store/leaveStore';
import { Card } from '../components/ui/Card';

export function DashboardPage() {
  const { user } = useAuthStore();
  const { leaveBalances, leaveRequests } = useLeaveStore();

  const pendingRequests = leaveRequests.filter(
    (request) => request.status === 'pending'
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome back, {user?.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <h2 className="text-lg font-medium text-gray-900">Leave Balance</h2>
          <div className="mt-4 space-y-4">
            {leaveBalances.map((balance) => (
              <div
                key={balance.leaveTypeId}
                className="flex justify-between items-center"
              >
                <span className="text-sm text-gray-500">
                  {balance.leaveTypeId}
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {balance.remaining} days
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-medium text-gray-900">
            Pending Requests ({pendingRequests.length})
          </h2>
          <div className="mt-4 space-y-4">
            {pendingRequests.slice(0, 3).map((request) => (
              <div
                key={request.id}
                className="flex justify-between items-center"
              >
                <span className="text-sm text-gray-500">
                  {new Date(request.startDate).toLocaleDateString()}
                </span>
                <span className="text-sm font-medium text-yellow-600">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}