import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const gradients = [
    'from-[#6a11cb] to-[#2575fc]',
    'from-[#ff7e5f] to-[#feb47b]',
    'from-[#43cea2] to-[#185a9d]',
    'from-[#ffafbd] to-[#ffc3a0]',
    'from-[#2193b0] to-[#6dd5ed]',
    'from-[#00c6ff] to-[#0072ff]',
    'from-[#f12711] to-[#f5af19]',
    'from-[#fc5c7d] to-[#6a82fb]',
    'from-[#56ab2f] to-[#a8e063]',
    'from-[#ff6e7f] to-[#bfe9ff]',
    'from-[#ee0979] to-[#ff6a00]',
    'from-[#1f4037] to-[#99f2c8]',
    'from-[#833ab4] to-[#fd1d1d]',
    'from-[#ff416c] to-[#ff4b2b]',
    'from-[#00f260] to-[#0575e6]'
];

const getGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)];
};

export const Job = ({ job }) => {
    const navigate = useNavigate();
    //console.log(job); // Now it should print the job object

    return (
        <motion.div
            className={`bg-gradient-to-r ${getGradient()} p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200`}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-between items-center mb-4">
                <p className="text-black text-md font-bold">2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark className="text-gray-600 hover:text-indigo-600" />
                </Button>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                    <AvatarImage className="rounded-full" src={job?.company?.logo} alt="Company Logo" />
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold text-black-800">{job?.company?.name}</h1>
                    <p className="text-blue text-lg">India</p>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-black-700">{job?.title}</h1>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                    {job?.description}
                </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <Button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                    Save for later
                </Button>
                <Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                    onClick={() => navigate(`/description/${job?._id}`)}
                >
                    Details
                </Button>
                <p className="text-black font-bold">24 LPA</p>
            </div>
        </motion.div>
    );
};
