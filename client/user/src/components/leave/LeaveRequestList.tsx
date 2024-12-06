import React from 'react';
import { format } from 'date-fns';
import { LeaveRequest } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, X } from 'lucide-react';

interface LeaveRequestListProps {
  requests: LeaveRequest[];
  isAdmin?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export function LeaveRequestList({
  requests,
  isAdmin = false,
  onApprove,
  onReject,
}: LeaveRequestListProps) {
  const getStatusColor = (status: LeaveRequest['status']) => {
    switch (status) {
      case 'approved':
        return 'text-green-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <Card>
      <h2 className="text-lg font-medium text-gray-900 mb-6">Leave Requests</h2>
      <div className="space-y-6">
        {requests.length === 0 ? (
          <p className="text-gray-500 text-center">No leave requests found.</p>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {format(new Date(request.startDate), 'PPP')} -{' '}
                    {format(new Date(request.endDate), 'PPP')}
                  </p>
                  <p className="text-sm text-gray-500">{request.reason}</p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                    request.status
                  )}`}
                >
                  {request.status}
                </span>
              </div>
              {isAdmin && request.status === 'pending' && (
                <div className="flex space-x-2 mt-2">
                  <Button
                    variant="primary"
                    onClick={() => onApprove?.(request.id)}
                    className="flex-1"
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Approve
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => onReject?.(request.id)}
                    className="flex-1"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Reject
                  </Button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </Card>
  );
}