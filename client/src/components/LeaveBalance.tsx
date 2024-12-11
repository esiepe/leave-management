import React from 'react';

interface LeaveBalanceCardProps {
  leaveType: string;
  usedDays: number;
  totalDays: number;
  remainingDays: number;
}

const LeaveBalanceCard: React.FC<LeaveBalanceCardProps> = ({ type, totalDays, remainingDays }) => {
  const isIncrease = remainingDays > 0;
  const changeColor = isIncrease ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400";

  const IncreaseIcon = () => (
    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M17.25 15.25V6.75H8.75" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M17 7L6.75 17.25" />
    </svg>
  );

  const DecreaseIcon = () => (
    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M17.25 8.75V17.25H8.75" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M17 17L6.75 6.75" />
    </svg>
  );

  return (
    <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
      <dl className="space-y-2">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{type}</dt>
        <dd className="text-5xl font-light md:text-6xl dark:text-white">{remainingDays}/{totalDays} days left</dd>
        <dd className={`flex items-center space-x-1 text-sm font-medium ${changeColor}`}>
          {isIncrease ? <IncreaseIcon /> : <DecreaseIcon />}
        </dd>
      </dl>
    </div>
  );
};

export default LeaveBalanceCard;