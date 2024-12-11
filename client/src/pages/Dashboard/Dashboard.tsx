import React, { useEffect, useState } from 'react';
import LeaveBalanceCard from '../../components/LeaveBalance';
import ChartOne from '../../components/Charts/ChartOne';
// import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
// import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import { fetchLeaveBalances, fetchLeaveTypes, fetchUsers } from '../../lib/mockApi';
import { useAuthStore } from '../../store/authStore';
import TableTwo from '../../components/Tables/TableTwo';
import TableThree from '../../components/Tables/TableThree';

const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [leaveBalances, setLeaveBalances] = useState<any[]>([]);
  const [leaveTypes, setLeaveTypes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch leave balances
    fetchLeaveBalances()
      .then((data) => setLeaveBalances(data as any[]))
      .catch((error) => console.error('Error fetching leave balances:', error));

    // Fetch leave types
    fetchLeaveTypes()
      .then((data) => setLeaveTypes(data as any[]))
      .catch((error) => console.error('Error fetching leave types:', error));
  }, []);

  const userLeaveBalances = leaveBalances.filter((balance) => balance.userId === user?.id);

  const leaveMetrics = userLeaveBalances.map((balance) => {
    const leaveType = leaveTypes.find((type) => type.id === balance.leaveTypeId);
    return {
      type: leaveType ? leaveType : 'Unknown',
      totalDays: leaveType ? leaveType.daysPerYear : 0,
      remainingDays: balance.remaining,
    };
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {leaveMetrics.map((metric, index) => (
          <LeaveBalanceCard
            key={index}
            type={metric.type}
            totalDays={metric.totalDays}
            remainingDays={metric.remainingDays}
          />
        ))}
      </div>

      {/* {user?.role === 'admin' && ( */}
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          {/* <ChartThree /> */}
          {/* <MapOne /> */}
          <div className="col-span-12">
            <TableOne />
          </div>
          <div className="col-span-12">
            <TableThree />
          </div>
          <div className="col-span-12">
            <TableTwo />
          </div>
          {/* <ChatCard /> */}
        </div>
      {/* )} */}
    </>
  );
};

export default Dashboard;
