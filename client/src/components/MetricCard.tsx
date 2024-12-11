import React from 'react';

const MetricCard = ({ icon, type, totalDays, bgColor, remainingDays }) => (
  <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
    <div className={`p-4 ${bgColor}`}>
      {icon}
    </div>
    <div className="px-4 text-gray-700">
      <h3 className="text-sm tracking-wider">{type}</h3>
      <p className="text-3xl">{remainingDays}/{totalDays} days left</p>
    </div>
  </div>
);

export default MetricCard;