import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import  FilterCard  from './FilterCard';
import { Job } from './Job';
import { useSelector } from 'react-redux';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery && typeof searchedQuery === 'string') {
            const lowerQuery = searchedQuery.toLowerCase();
            const filteredJobs = allJobs.filter((job) =>
                job.title.toLowerCase().includes(lowerQuery) ||
                job.description.toLowerCase().includes(lowerQuery) ||
                job.location.toLowerCase().includes(lowerQuery)
            );
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    return (
        <div className="bg-[#eeeee4]">
            <Navbar />
            <div className="max-w-8xl mx-auto mt-24 px-8">
                <div className="flex gap-8">
                    <div className="w-1/5 bg-[#eeeee4]  shadow-lg rounded-xl p-6">
                        <FilterCard />
                    </div>
                    {!filterJobs || filterJobs.length === 0 ? (
                        <span className="text-gray-700 text-lg">Job not found</span>
                    ) : (
                        <div className="flex-1 h-[85vh] overflow-y-auto pb-6 bg-[#eeeee4]  shadow-lg rounded-xl p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filterJobs.map((job) => (
                                    <div key={job?._id} className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transition-transform transform hover:scale-105">
                                        <Job job={job} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
