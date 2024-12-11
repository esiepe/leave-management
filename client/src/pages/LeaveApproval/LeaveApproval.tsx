import { useEffect, useState } from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

interface LeaveApplication {
  id: string;
  employeeName: string;
  department: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  attachments: Array<{
    name: string;
    url: string;
  }>;
}

const LeaveApproval = () => {
  const [loading, setLoading] = useState(true);
  const [leaveData, setLeaveData] = useState<LeaveApplication | null>(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchLeaveApplication();
  }, []);

  const fetchLeaveApplication = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('/auth/leave-applications/1');
      const data = await response.json();
      setLeaveData(data);
    } catch (error) {
      console.error('Error fetching leave application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    try {
      await fetch(`/api/leave-applications/${leaveData?.id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
      // Refresh data after approval
      fetchLeaveApplication();
    } catch (error) {
      console.error('Error approving leave:', error);
    }
  };

  const handleReject = async () => {
    try {
      await fetch(`/api/leave-applications/${leaveData?.id}/reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
      // Refresh data after rejection
      fetchLeaveApplication();
    } catch (error) {
      console.error('Error rejecting leave:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-boxdark">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb pageName="Leave Application Review" />
      
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-black dark:text-white">
                  Leave Application Details
                </h3>
                <span className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                  leaveData?.status === 'approved' ? 'bg-success text-success' :
                  leaveData?.status === 'rejected' ? 'bg-danger text-danger' :
                  'bg-warning text-warning'
                }`}>
                  {(leaveData?.status ?? '').charAt(0).toUpperCase() + (leaveData?.status ?? '').slice(1)}
                </span>
              </div>
            </div>

            <div className="p-6.5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Employee Name
                  </label>
                  <div className="text-sm text-gray-500">{leaveData?.employeeName}</div>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Department
                  </label>
                  <div className="text-sm text-gray-500">{leaveData?.department}</div>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Leave Type
                  </label>
                  <div className="text-sm text-gray-500">{leaveData?.leaveType}</div>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Duration
                  </label>
                  <div className="text-sm text-gray-500">
                    {`${leaveData?.startDate} - ${leaveData?.endDate} (${leaveData?.totalDays} days)`}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Reason
                  </label>
                  <div className="text-sm text-gray-500">{leaveData?.reason}</div>
                </div>

                {leaveData?.attachments?.length > 0 && (
                  <div className="md:col-span-2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Attachments
                    </label>
                    <ul className="rounded-sm border border-stroke dark:border-strokedark">
                      {leaveData?.attachments?.map((file, index) => (
                        <li key={index} className="flex items-center justify-between px-4 py-3">
                          <div className="flex items-center">
                            <PaperClipIcon className="h-5 w-5 text-gray-400" />
                            <span className="ml-2 text-sm">{file.name}</span>
                          </div>
                          <a
                            href={file.url}
                            className="text-sm text-primary hover:text-opacity-80"
                            download
                          >
                            Download
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="md:col-span-2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Comments
                  </label>
                  <textarea
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Add your comments here..."
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={handleReject}
                  className="inline-flex items-center justify-center rounded-md border border-meta-1 px-6 py-3 text-center font-medium text-meta-1 hover:bg-meta-1 hover:text-white"
                >
                  Reject
                </button>
                <button
                  onClick={handleApprove}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center font-medium text-white hover:bg-opacity-90"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveApproval;