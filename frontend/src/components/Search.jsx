import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import { Job } from './Job';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useGetAllJobs } from '@/hooks/useGetAllJobs';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
export const Search = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job)
    const dispatch = useDispatch();
    useEffect(()=>{
       return () => {
        dispatch(setSearchedQuery(""));
       }
    })
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto my-20 p-6">
                <h1 className="font-bold text-2xl text-gray-800 my-10">Search Results ({allJobs.length})</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {allJobs.map((job) => (
                        <Job key={job?._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};