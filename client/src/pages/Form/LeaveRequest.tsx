import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';

const LeaveRequest = () => {
  const leaveTypes = [
    'Annual Leave',
    'Sick Leave',
    'Emergency Leave',
    'Maternity Leave',
    'Paternity Leave',
    'Study Leave',
  ];

  return (
    <>
      <Breadcrumb pageName="Leave Application Form" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Leave Application Form
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              {/* Personal Information Section */}
              <div className="mb-6">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Full Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  {/* <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Position/Grade
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your position or grade"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div> */}
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Department
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your department or class"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your ID"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Contact Number <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your contact number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Email Address <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Leave Details Section */}
              <div className="mb-6">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Leave Details
                </h4>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Type of Leave <span className="text-meta-1">*</span>
                    </label>
                    <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white">
                      <option value="">Select leave type</option>
                      {leaveTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Reason for Leave <span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter reason for leave"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    ></textarea>
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Leave Start Date <span className="text-meta-1">*</span>
                    </label>
                    {/* <input
                      type="date"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    /> */}
                    <DatePickerOne />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Leave End Date <span className="text-meta-1">*</span>
                    </label>
                    {/* <input
                      type="date"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    /> */}
                    <DatePickerTwo />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Total Number of Days
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Number of days"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Address During Leave
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Enter your address during leave period"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Submit Leave Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;