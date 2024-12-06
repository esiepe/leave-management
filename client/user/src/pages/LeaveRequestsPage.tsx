import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useLeaveStore } from '../store/leaveStore';
import { LeaveRequestForm } from '../components/leave/LeaveRequestForm';
import { LeaveRequestList } from '../components/leave/LeaveRequestList';

export function LeaveRequestsPage() {
  const { user } = useAuthStore();
  const { leaveRequests, addLeaveRequest, updateLeaveRequest } = useLeaveStore();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data: any) => {
    const newRequest = {
      id: Date.now().toString(),
      userId: user?.id || '',
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    addLeaveRequest(newRequest);
    setShowForm(false);
  };

  const handleApprove = (id: string) => {
    updateLeaveRequest(id, 'approved');
  };

  const handleReject = (id: string) => {
    updateLeaveRequest(id, 'rejected');
  };

  const filteredRequests = user?.role === 'admin'
    ? leaveRequests
    : leaveRequests.filter(request => request.userId === user?.id);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Leave Requests</h1>
        {user?.role !== 'admin' && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {showForm ? 'Cancel' : 'New Request'}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {showForm && (
          <div className="lg:col-span-1">
            <LeaveRequestForm onSubmit={handleSubmit} />
          </div>
        )}
        <div className={showForm ? 'lg:col-span-1' : 'lg:col-span-2'}>
          <LeaveRequestList
            requests={filteredRequests}
            isAdmin={user?.role === 'admin'}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </div>
    </div>
  );
}