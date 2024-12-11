import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const DropdownUser: React.FC = () => {
  const { user } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const defaultProfilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  const profilePic = user?.profilePic || defaultProfilePic;

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-3"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={profilePic}
          alt="User Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Settings
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-5 px-6 py-7.5">
            <button
              onClick={() => {
                // Add your sign-out logic here
              }}
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
