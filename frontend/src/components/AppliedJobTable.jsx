import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);
  return (
    // <div>
    //   <Table className='border border-black-500 shadow-lg rounded-2xl overflow-hidden'>
    //     <TableCaption>A list of your applied jobs</TableCaption>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead>Date</TableHead>
    //         <TableHead>Job Role</TableHead>
    //         <TableHead>Company</TableHead>
    //         <TableHead className="text-right">Status</TableHead>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {
    //         allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> : allAppliedJobs.map((appliedJob) => (
    //           <TableRow key={appliedJob._id}>
    //             <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
    //             <TableCell>{appliedJob.job?.title}</TableCell>
    //             <TableCell>{appliedJob.job?.company?.name}</TableCell>
    //             <TableCell className="text-right"><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-500'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
    //           </TableRow>
    //         ))
    //       }
    //     </TableBody>
    //   </Table>
    // </div>
    <div className="p-4">
      <Table className="border border-gray-300 shadow-md rounded-2xl overflow-hidden">
        <TableCaption className="p-4 bg-gray-50 font-semibold text-lg">A list of your applied jobs</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow className="border-b border-gray-300">
            <TableHead className="border-r border-gray-300">Date</TableHead>
            <TableHead className="border-r border-gray-300">Job Role</TableHead>
            <TableHead className="border-r border-gray-300">Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow className="border-b border-gray-300">
              <TableCell colSpan={4} className="p-4 text-center text-gray-500">
                You haven't applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id} className="border-b border-gray-300 hover:bg-gray-50">
                <TableCell className="border-r border-gray-300">
                  {appliedJob?.createdAt?.split('T')[0]}
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="border-r border-gray-300">
                  {appliedJob.job?.company?.name}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === 'rejected'
                        ? 'bg-red-400'
                        : appliedJob.status === 'pending'
                        ? 'bg-gray-400'
                        : 'bg-green-500'
                    } p-1 text-black rounded-xl`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable;