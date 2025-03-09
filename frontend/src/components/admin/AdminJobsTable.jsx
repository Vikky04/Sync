import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = () => {
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredJobs = allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
                job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    return (
        <div className="p-4 overflow-auto h-[calc(100vh-80px)] ">
            <Table className="min-w-full border bg-gray-900 rounded-xl shadow-md border-separate border-spacing-y-2">
                <TableCaption className="text-lg font-semibold">A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gray-900">
                        <TableHead className="p-4 font-bold text-white">Company Name</TableHead>
                        <TableHead className="p-4 font-bold text-white">Role</TableHead>
                        <TableHead className="p-4 font-bold text-white">Date</TableHead>
                        <TableHead className="p-4 font-bold text-right text-white">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterJobs?.map((job) => (
                        <TableRow key={job._id} className="hover:bg-green-200 transition-colors">
                            <TableCell className="p-4 text-white">{job?.company?.name}</TableCell>
                            <TableCell className="p-4 text-white">{job?.title}</TableCell>
                            <TableCell className="p-4 text-white">{job?.createdAt.split('T')[0]}</TableCell>
                            <TableCell className="p-4 text-white text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors" />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-40 bg-white shadow-md rounded-lg">
                                        <div
                                            onClick={() => navigate(`/admin/companies/${job._id}`)}
                                            className="flex items-center gap-2 w-full cursor-pointer p-2 rounded-full transition-all duration-200 bg-gray-50 hover:bg-blue-500 hover:text-white"
                                        >
                                            <Edit2 className="w-4 text-blue-600" />
                                            <span className="font-medium rounded-full">Edit</span>
                                        </div>
                                        <div
                                            onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                                            className="flex items-center gap-2 w-full cursor-pointer p-2 rounded-full transition-all duration-200 bg-gray-50 hover:bg-blue-500 hover:text-white"
                                        >
                                            <Eye className="w-4 text-blue-600" />
                                            <span className="font-medium rounded-full">Applicants</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminJobsTable;