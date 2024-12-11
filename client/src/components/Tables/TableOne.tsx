import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

// const brandData: BRAND[] = [
//   {
//     logo: BrandOne,
//     name: 'Google',
//     visitors: 3.5,
//     revenues: '5,768',
//     sales: 590,
//     conversion: 4.8,
//   },
//   {
//     logo: BrandTwo,
//     name: 'Twitter',
//     visitors: 2.2,
//     revenues: '4,635',
//     sales: 467,
//     conversion: 4.3,
//   },
//   {
//     logo: BrandThree,
//     name: 'Github',
//     visitors: 2.1,
//     revenues: '4,290',
//     sales: 420,
//     conversion: 3.7,
//   },
//   {
//     logo: BrandFour,
//     name: 'Vimeo',
//     visitors: 1.5,
//     revenues: '3,580',
//     sales: 389,
//     conversion: 2.5,
//   },
//   {
//     logo: BrandFive,
//     name: 'Facebook',
//     visitors: 3.5,
//     revenues: '6,768',
//     sales: 390,
//     conversion: 4.2,
//   },
// ];

type EmployeeRegistration = {
  id: string;
  name: string;
  department: string;
  email: string;
  address: string;
  status: 'pending' | 'approved' | 'rejected';
};

const TableOne = () => {
  const employeeRegistrations = [
    {
      id: '1',
      name: 'John Doe',
      department: 'IT',
      email: 'john.doe@company.com',
      address: '123 Main St, City',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Jane Smith',
      department: 'Marketing',
      email: 'jane.smith@company.com',
      address: '456 Oak Ave, Town',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      department: 'HR',
      email: 'mike.j@company.com',
      address: '789 Pine Rd, County',
      status: 'pending'
    }
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        New Employee Registrations
      </h4>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Profile
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white text-center">
                Department
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white text-center">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white text-center">
                Address
              </th>
            </tr>
          </thead>

          <tbody>
            {employeeRegistrations.map((employee, key) => (
              <tr key={employee.id}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={BrandOne}
                        alt="Profile"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <p className="text-black dark:text-white">
                      {employee.name}
                    </p>
                  </div>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <p className="text-black dark:text-white">
                    {employee.department}
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <p className="text-black dark:text-white">
                    {employee.email}
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <p className="text-black dark:text-white">
                    {employee.address}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
