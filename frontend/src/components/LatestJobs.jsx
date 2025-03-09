import React from 'react';
import { LatestJobCards } from './LatestJobCards';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

//const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

export const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job);
  // console.log("Redux Jobs:", allJobs);
  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Latest Job Openings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {
          allJobs && allJobs.length > 0 ? (
            allJobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
          ) : (
            <span>No Job Available</span>
          )
        }
      </div>
    </div>
  );
};
