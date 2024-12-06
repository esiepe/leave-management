import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useLeaveStore } from '../../store/leaveStore';

const leaveRequestSchema = z.object({
  leaveTypeId: z.string().min(1, 'Leave type is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  reason: z.string().min(10, 'Please provide a detailed reason'),
}).refine(data => new Date(data.startDate) <= new Date(data.endDate), {
  message: "End date must be after start date",
  path: ["endDate"],
});

type LeaveRequestFormData = z.infer<typeof leaveRequestSchema>;

interface LeaveRequestFormProps {
  onSubmit: (data: LeaveRequestFormData) => void;
}

export function LeaveRequestForm({ onSubmit }: LeaveRequestFormProps) {
  const { leaveTypes } = useLeaveStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaveRequestFormData>({
    resolver: zodResolver(leaveRequestSchema),
  });

  return (
    <Card>
      <h2 className="text-lg font-medium text-gray-900 mb-6">New Leave Request</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Leave Type
          </label>
          <select
            {...register('leaveTypeId')}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select a leave type</option>
            {leaveTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.leaveTypeId && (
            <p className="mt-1 text-sm text-red-600">{errors.leaveTypeId.message}</p>
          )}
        </div>

        <Input
          type="date"
          label="Start Date"
          {...register('startDate')}
          error={errors.startDate?.message}
        />

        <Input
          type="date"
          label="End Date"
          {...register('endDate')}
          error={errors.endDate?.message}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reason
          </label>
          <textarea
            {...register('reason')}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.reason && (
            <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>
          )}
        </div>

        <Button type="submit" fullWidth>
          Submit Request
        </Button>
      </form>
    </Card>
  );
}