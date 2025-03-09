import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminJobsTable from './AdminJobsTable';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
import { searchJobByText } from '@/redux/jobSlice';

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchJobByText(input));
  }, [input]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className='max-w-7xl mx-auto my-10 pt-5 px-4'>
        <div className='flex items-center justify-between my-5 gap-4'>
          <Input
            className='flex-1 p-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500'
            placeholder='Filter by name, role'
            onChange={(e) => setInput(e.target.value)}
          />
          <Button 
            className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-2 rounded-full transition-colors shadow-md'
            onClick={() => navigate('/admin/jobs/create')}>
            New Jobs
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;