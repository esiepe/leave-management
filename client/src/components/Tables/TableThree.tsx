import { Package } from '../../types/package';
import BrandOne from '../../images/brand/brand-01.svg'; // Temporary profile image

type LeaveApplication = {
  id: string;
  employeeName: string;
  profilePic: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
};

const leaveApplications: LeaveApplication[] = [
  {
    id: '1',
    employeeName: 'John Doe',
    profilePic: BrandOne,
    startDate: 'Mar 15, 2024',
    endDate: 'Mar 20, 2024',
    status: 'pending',
  },
  {
    id: '2',
    employeeName: 'Jane Smith',
    profilePic: BrandOne,
    startDate: 'Mar 18, 2024',
    endDate: 'Mar 22, 2024',
    status: 'pending',
  },
];

// const packageData: Package[] = [
//   {
//     name: 'Free package',
//     price: 0.0,
//     invoiceDate: `Jan 13,2023`,
//     status: 'Paid',
//   },
//   {
//     name: 'Standard Package',
//     price: 59.0,
//     invoiceDate: `Jan 13,2023`,
//     status: 'Paid',
//   },
//   {
//     name: 'Business Package',
//     price: 99.0,
//     invoiceDate: `Jan 13,2023`,
//     status: 'Unpaid',
//   },
//   {
//     name: 'Standard Package',
//     price: 59.0,
//     invoiceDate: `Jan 13,2023`,
//     status: 'Pending',
//   },
// ];

const TableThree = () => {
  const handleApprove = (id: string) => {
    console.log('Approved:', id);
  };

  const handleReject = (id: string) => {
    console.log('Rejected:', id);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Leave Applications
      </h4>
      
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Employee
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Start Date
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                End Date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {leaveApplications.map((application) => (
              <tr key={application.id}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={application.profilePic}
                        alt="Profile"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <p className="text-black dark:text-white">
                      {application.employeeName}
                    </p>
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {application.startDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {application.endDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                    application.status === 'approved'
                      ? 'text-success bg-success'
                      : application.status === 'rejected'
                      ? 'text-danger bg-danger'
                      : 'text-warning bg-warning'
                  }`}>
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      onClick={() => handleApprove(application.id)}
                      className="hover:text-primary"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM13.635 7.35L8.385 12.6C8.19 12.795 7.92 12.9 7.65 12.9C7.38 12.9 7.11 12.795 6.915 12.6L4.365 10.05C3.975 9.66 3.975 9.03 4.365 8.64C4.755 8.25 5.385 8.25 5.775 8.64L7.65 10.515L12.225 5.94C12.615 5.55 13.245 5.55 13.635 5.94C14.025 6.33 14.025 6.96 13.635 7.35Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleReject(application.id)}
                      className="hover:text-meta-1"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM13.635 12.135C13.245 12.525 12.615 12.525 12.225 12.135L9 8.91L5.775 12.135C5.385 12.525 4.755 12.525 4.365 12.135C3.975 11.745 3.975 11.115 4.365 10.725L7.59 7.5L4.365 4.275C3.975 3.885 3.975 3.255 4.365 2.865C4.755 2.475 5.385 2.475 5.775 2.865L9 6.09L12.225 2.865C12.615 2.475 13.245 2.475 13.635 2.865C14.025 3.255 14.025 3.885 13.635 4.275L10.41 7.5L13.635 10.725C14.025 11.115 14.025 11.745 13.635 12.135Z"
                          fill="currentColor"
                        />
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

export default TableThree;
