import React from 'react';
import SummaryCard from './SummaryCard';
import { FaUsers, FaBuilding, FaFileAlt, FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa'; // Add missing imports

const AdminSummary = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <SummaryCard icon={<FaUsers />} text="Total Students" number={13} color="bg-blue-500" />
        <SummaryCard icon={<FaBuilding />} text="Total Departments" number={5} color="bg-green-500" />
      </div>

      <h4 className="text-center text-2xl font-bold mt-6">Leave Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <SummaryCard
          icon={<FaFileAlt />}
          text="Leave Applied"
          number={5}
          color="bg-teal-600"
        />
        <SummaryCard
          icon={<FaCheckCircle />}
          text="Leave Approved"
          number={2}
          color="bg-green-600"
        />
        <SummaryCard
          icon={<FaHourglassHalf />}
          text="Leave Pending"
          number={4}
          color="bg-yellow-600"
        />
        <SummaryCard
          icon={<FaTimesCircle />}
          text="Leave Rejected"
          number={1}
          color="bg-red-600"
        />
      </div>
    </div>
  );
};

export default AdminSummary;
