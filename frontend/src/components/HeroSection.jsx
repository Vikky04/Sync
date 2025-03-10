import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const companies = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/768px-Adobe_Corporate_logo.svg.png" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/768px-Intel_logo_2023.svg.png" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
];

const words = ["Job", "Sync"];
const duration = 1000;
export const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, []);
  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/search");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-1 pt-0 bg-cover bg-center relative"
    >
      {/* <motion.h1
        className="text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Sync
      </motion.h1> */}
      <div className="flex flex-row items-center justify-between -mt-16 gap-x-40">
        <div className="flex flex-col w-1/2 -mt-80">
          <div className='mb-10'>
            <motion.h1
              className="text-7xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Find the{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className="text-blue-600"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>{" "}
              that suits your life
            </motion.h1>
          </div>
          <div>
            <motion.p
              className="text-lg font-bold text-gray-600 opacity-80 mt-4 pl-14 pr-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Find the perfect <span className="text-blue-600">Jobs</span>, explore engaging
              <span className="text-blue-600"> courses</span>, and enhance your skills with hands-on
              <span className="text-blue-600"> practice</span>. Our platform offers a seamless experience
              to elevate your career journey.
            </motion.p>
          </div>
          <motion.div
            className="flex items-center w-full max-w-2xl mx-auto mt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search career opportunities..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 pr-12 border-2 border-gray-300 rounded-full focus:outline-none"
              />
              <button
                onClick={searchJobHandler}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#d1420f] text-white rounded-full p-2 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        <div className='w-1/2 -mt-64'>
          <motion.div className="relative flex items-center justify-center w-full h-96">
            {/* First Icon Box (Top Left) */}
            <motion.div
              className="absolute top-4 left-4 flex items-center p-4 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mr-4 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <div>
                <p className="text-lg font-bold">Satisfaction</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </motion.div>

            {/* Center Image */}
            <motion.img
              src="/images/mainImage.png"
              alt="Center Image"
              className="w-100 h-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Second Icon Box (Bottom Right) */}
            <motion.div
              className="absolute bottom-4 right-4 flex items-center p-4 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mr-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7h18M3 12h18m-9 5h9"
                />
              </svg>
              <div>
                <p className="text-lg font-bold">Vacancies</p>
                <p className="text-blue-600 font-bold">200+</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="w-[98%] h-[130px] bg-gray-800 mt-6 rounded-xl overflow-hidden -mb-80">
        <motion.div
          className="flex items-center h-full gap-20 px-10 animate-scroll whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center min-w-[100px]">
              <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
      {/* <motion.button
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-lg hover:bg-blue-600"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get Started
      </motion.button>

      <motion.button
        className="mt-4 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={searchJobHandler}
      >
        Search Jobs
      </motion.button> */}
    </div>
  );
};
