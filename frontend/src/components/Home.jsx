import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import { HeroSection } from './HeroSection';
import { CategoryCarousel } from './CategoryCarousel';
import { LatestJobs } from './LatestJobs';
import { Footer } from './Footer';
import { useGetAllJobs } from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, []);

  return (
    <div className='min-h-screen bg-[#eeeee4] flex flex-col'>
      <Navbar />
      <div className='flex-grow'>
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
      </div>
      <Footer />
    </div>
  );
};
