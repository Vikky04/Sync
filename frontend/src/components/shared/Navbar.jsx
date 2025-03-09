import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className='bg-[#eeeee4] fixed top-0 w-full z-50 shadow-md px-6'>
            <div className='flex items-center justify-between max-w-8xl mx-auto h-16'>
                <h1 className="ml-20 text-4xl font-bold text-black font-[Playfair Display] italic">
                    Sync
                </h1>
                <div className='hidden md:flex items-center gap-2'>
                    <ul className="flex gap-6 p-4 ">
                        {user?.role === 'recruiter' ? (
                            <>
                                <li>
                                    <Link to="/admin/companies" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">Companies</Link>
                                </li>
                                <li>
                                    <Link to="/admin/jobs" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">Jobs</Link>
                                </li>
                                <li>
                                    <Link to="/" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">About Us</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">Home</Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://stellar-dango-4cd983.netlify.app/"
                                        className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Practice
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">Courses</Link>
                                </li>
                                <li>
                                    <Link to="/jobs" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">Jobs</Link>
                                </li>
                                <li>
                                    <Link to="/search" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">Search</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200">About Us</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {!user ? (
                        <div className='flex gap-2'>
                            <Link to="/login">
                                <Button variant="outline" className="rounded-full text-black hover:bg-black hover:text-white">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="rounded-full bg-gray-800 hover:bg-black text-white">Sign Up</Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullName || "Profile"} className="w-10 h-10 rounded-full" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="bg-green-100 p-4 rounded-xl shadow-lg">
                                <div className='flex gap-5'>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullName || "Profile"} className="w-10 h-10 rounded-full" />
                                    </Avatar>
                                    <div>
                                        <h3 className=' text-xl font-bold text-black'>{user?.fullName}</h3>
                                        <p className='text-sm text-gray-500'>{user?.bio}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-600 mt-3'>
                                    {user?.role === 'student' && (
                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link" className="text-black font-bold"><Link to="/profile">View Profile</Link></Button>
                                        </div>
                                    )}
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <LogOut />
                                        <Button variant="link" onClick={logoutHandler} className="text-black font-bold">Logout</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
                <div className='md:hidden'>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="text-black">☰</Button>
                        </PopoverTrigger>
                        <PopoverContent className="bg-white p-4 rounded-md shadow-lg w-48">
                            <ul className='flex flex-col gap-3 text-black'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/jobs">Jobs</Link></li>
                                <li><Link to="/search">Search</Link></li>
                            </ul>
                            <div className='mt-4'>
                                {!user ? (
                                    <div className='flex flex-col gap-2'>
                                        <Link to="/login">
                                            <Button variant="outline" className="w-full text-black">Login</Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] w-full text-white">Sign Up</Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className='flex flex-col gap-2'>
                                        <Button variant="link" className="text-black">View Profile</Button>
                                        <Button variant="link" className="text-black" onClick={logoutHandler}>Logout</Button>
                                    </div>
                                )}
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
