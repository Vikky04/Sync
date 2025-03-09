import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const categories = [
  { name: 'Frontend Developer', color: 'from-indigo-500 to-purple-500' },
  { name: 'Backend Developer', color: 'from-green-500 to-teal-500' },
  { name: 'Full Stack Developer', color: 'from-yellow-400 to-red-600' },
  { name: 'Software Engineer', color: 'from-pink-500 to-red-500' },
  { name: 'Software Developement Engineer', color:'from-gray-500 to-black' },
  { name: 'Machine Learning Engineer', color: 'from-green-400 to-blue-600' },
  { name: 'Data Scientist', color: 'from-purple-500 to-pink-500' },
  { name: 'DevOps Engineer', color: 'from-yellow-500 to-orange-500' },
  // { name: 'Cybersecurity Specialist', color: 'from-gray-500 to-black' },
  // { name: 'Cloud Engineer', color: 'from-blue-400 to-indigo-600' },
  // { name: 'Mobile App Developer', color: 'from-red-400 to-pink-600' },
  // { name: 'AI Engineer', color: 'from-orange-400 to-yellow-600' },
  // { name: 'Blockchain Developer', color: 'from-teal-400 to-green-600' },
  // { name: 'Game Developer', color: 'from-pink-400 to-purple-600' },
  // { name: 'Embedded Systems Engineer', color: 'from-yellow-400 to-red-600' }
];

export const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/search");
  };

  return (
    <div className=" w-[80%] mx-auto -mt-24">
      <h2 className="text-4xl font-bold mb-10 text-center">Popular Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-64 h-40 rounded-2xl p-6 text-white bg-gradient-to-r ${cat.color} shadow-lg cursor-pointer transform transition-all hover:shadow-2xl`}
            onClick={() => searchJobHandler(cat.name)}
          >
            <h3 className="text-xl font-bold text-center">{cat.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
