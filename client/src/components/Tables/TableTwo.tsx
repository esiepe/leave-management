import React, { useState } from 'react';
import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';
import { LeaveType } from '../../types';


const TableTwo = () => {
  const [editingPolicy, setEditingPolicy] = useState<string | null>(null);

  const policies: LeaveType[] = [
    {
      id: '1',
      name: 'Annual Leave',
      description: 'Standard annual leave allocation',
      daysPerYear: 20,
      requiresApproval: true,
      minDaysNotice: 5,
      maxConsecutiveDays: 15,
      allowsCarryOver: true,
      carryOverLimit: 5
    },
    // Add more mock data as needed
    {
      id: '2',
      name: 'Sick Leave',
      description: 'Paid sick leave',
      daysPerYear: 10,
      requiresApproval: true,
      minDaysNotice: 1,
      allowsCarryOver: true,
      carryOverLimit: 2
    },
    {
      id: '3',
      name: 'Maternity Leave',
      description: 'Paid maternity leave',
      daysPerYear: 90,
      requiresApproval: true,
      minDaysNotice: 30,
      allowsCarryOver: false
    },
    {
      id: '4',
      name: 'Paternity Leave',
      description: 'Paid paternity leave',
      daysPerYear: 10,
      requiresApproval: true,
      minDaysNotice: 5,
      allowsCarryOver: false
    },
    {
      id: '5',
      name: 'Unpaid Leave',
      description: 'Unpaid leave',
      daysPerYear: 0,
      requiresApproval: true,
      minDaysNotice: 1,
      allowsCarryOver: false
    },
    {
      id: '6',
      name: 'Study Leave',
      description: 'Paid study leave',
      daysPerYear: 5,
      requiresApproval: true,
      minDaysNotice: 10,
      allowsCarryOver: true,
      carryOverLimit: 1
    }
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Leave Policies
        </h4>
        <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90">
          Add New Policy
        </button>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Policy Name
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white text-center">
                Days/Year
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white text-center">
                Notice Required
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white text-center">
                Max Days
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white text-center">
                Carry Over
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy) => (
              <tr key={policy.id}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex flex-col">
                    <p className="text-black dark:text-white font-medium">
                      {policy.name}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {policy.description}
                    </span>
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <span className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    {policy.daysPerYear}
                  </span>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <span className="text-black dark:text-white">
                    {policy.minDaysNotice} days
                  </span>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <span className="text-black dark:text-white">
                    {policy.maxConsecutiveDays || 'N/A'}
                  </span>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <div className="flex flex-col items-center">
                    <span className={`inline-block rounded-full ${
                      policy.allowsCarryOver 
                        ? 'bg-success/10 text-success' 
                        : 'bg-danger/10 text-danger'
                    } py-1 px-3 text-sm font-medium`}>
                      {policy.allowsCarryOver ? 'Yes' : 'No'}
                    </span>
                    {policy.allowsCarryOver && policy.carryOverLimit && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Max: {policy.carryOverLimit} days
                      </span>
                    )}
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center justify-center space-x-3.5">
                  <button className="hover:text-primary" onClick={() => setEditingPolicy(policy.id)}>
                    <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 13.3333V17.5H6.66667L15.8333 8.33333L11.6667 4.16667L2.5 13.3333Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="hover:text-primary" onClick={() => console.log('Delete', policy.id)}>
                    <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33333 5H16.6667M5 5V16.6667C5 17.1087 5.17559 17.5326 5.48816 17.8452C5.80072 18.1577 6.22464 18.3333 6.66667 18.3333H13.3333C13.7754 18.3333 14.1993 18.1577 14.5118 17.8452C14.8244 17.5326 15 17.1087 15 16.6667V5M7.5 5V3.33333C7.5 2.89131 7.67559 2.46739 7.98816 2.15482C8.30072 1.84226 8.72464 1.66667 9.16667 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46739 12.5 2.89131 12.5 3.33333V5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTwo;
