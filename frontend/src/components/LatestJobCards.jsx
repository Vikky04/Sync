import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const gradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-green-400 via-blue-500 to-purple-600',
  'from-yellow-400 via-red-500 to-pink-500',
  'from-teal-400 via-green-500 to-blue-600',
  'from-red-400 via-orange-500 to-yellow-600',
  'from-blue-500 via-teal-500 to-green-500',
  'from-pink-500 via-red-500 to-yellow-500',
  'from-purple-600 via-pink-500 to-red-500',
  'from-orange-500 via-pink-500 to-purple-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-lime-500 via-green-500 to-teal-500',
  'from-rose-500 via-pink-500 to-purple-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-sky-500 via-blue-500 to-purple-500',
  'from-violet-500 via-indigo-500 to-blue-500',
];


const getGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};


export const LatestJobCards = ({ job }) => {
  //console.log("Job Data in Card:", job?.title);
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`description/${job._id}`)}
      className={`bg-gradient-to-r ${getGradient()} shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-2xl font-semibold text-gray-800 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {job?.title || "Untitled Job"}
      </motion.h3>
      <motion.p
        className="text-gray-600 mt-2 font-bold text-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {job?.company?.name || "Unknown Company"}
      </motion.p>
      <motion.div
        className="flex justify-between items-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Badge variant="ghost" className="text-lg text-indigo-600 font-medium">
          {job?.jobType || "Not Specified"} time
        </Badge>
        <Badge variant="ghost" className="text-lg text-indigo-600 font-medium">
          {job?.salary || "Negotiable"} LPA
        </Badge>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-800 text-white font-bold text-bold px-4 py-2 hover:bg-grey transition rounded-full"
        >
          Apply Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
