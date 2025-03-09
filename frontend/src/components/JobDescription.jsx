import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

export const JobDescription = () => {
    const navigate = useNavigate();
    const { id: jobId } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.auth);
    const { singleJob } = useSelector((store) => store.job);
    const isInitiallyApplied = singleJob?.applications?.some(app => app.applicant === user?._id) || false;
    const [applied, setApplied] = useState(isInitiallyApplied);
    //console.log(jobId);
    const applyJobHandler = async () => {
        try {
            const res = await axios.post(
                `${APPLICATION_API_END_POINT}/apply/${jobId}`,
                {},
                { withCredentials: true }
            );
            //console.log('API Request URL:', res); // Add this line to debug the URL
            if (res.data.success) {
                setApplied(true);
                const updatedJob = {
                    ...singleJob,
                    applications: [...(singleJob.applications || []), { applicant: user?._id }]
                };
                dispatch(setSingleJob(updatedJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to apply for job.');
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                console.error('Error fetching job:', error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch]);

    useEffect(() => {
        setApplied(singleJob?.applications?.some(app => app.applicant === user?._id) || false);
    }, [singleJob, user]);

    return (
        <motion.div
            className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-3xl font-bold mb-4">{singleJob?.title || 'Job Title'}</h1>
            <p className="text-sm mb-2">{singleJob?.company?.name || 'Company Name'}</p>
            <p className="mb-4">{singleJob?.description || 'No job description available.'}</p>

            <div className="grid grid-cols-2 gap-4">
                <p><strong>Experience Level:</strong> {singleJob?.experienceLevel || 'Not specified'}</p>
                <p><strong>Job Type:</strong> {singleJob?.jobType || 'Not specified'}</p>
                <p><strong>Location:</strong> {singleJob?.location || 'Not specified'}</p>
                <p><strong>Position:</strong> {singleJob?.position || 'Not specified'}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold">Job Requirements:</h2>
                <ul className="list-disc list-inside">
                    {singleJob?.requirements?.split(',').map((req, i) => <li key={i}>{req.trim()}</li>) || <li>No specific requirements listed.</li>}
                </ul>
            </div>

            <div className="mt-6 flex justify-between items-center">
                <p className="text-indigo-600 font-medium">{singleJob?.salary ? `${singleJob.salary} LPA` : 'Salary not specified'}</p>
                <div className="flex gap-4">
                    <Button onClick={() => navigate(-1)}>Back</Button>
                    <Button onClick={applyJobHandler} disabled={applied} className={applied ? 'bg-green-500' : 'bg-indigo-600'}>
                        {applied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
