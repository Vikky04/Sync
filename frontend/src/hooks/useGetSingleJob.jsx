import { setAllJobs, setSingleJob } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetSingleJob = (jobId) => {
    const dispatch = useDispatch();
    return (
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleJob(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    },[])
)
}
