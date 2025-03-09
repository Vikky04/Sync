import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'

export const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const { loading , user} = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <form onSubmit={submitHandler} className="bg-white shadow-lg rounded-lg p-8 w-96">
                    <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Full Name</Label>
                        <Input type="text" placeholder="Enter Your Full Name" className="w-full p-2 border rounded mt-1 placeholder-gray-400"
                            value={input.fullName}
                            name="fullName"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Email</Label>
                        <Input type="email" placeholder="vikas1234@gmail.com" className="w-full p-2 border rounded mt-1 placeholder-gray-400"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Phone Number</Label>
                        <Input type="number" className="w-full p-2 border rounded mt-1 placeholder-gray-400"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Password</Label>
                        <Input type="password" placeholder="Enter your password" className="w-full p-2 border rounded mt-1 placeholder-gray-400"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Role</Label>
                        <RadioGroup className="flex gap-4 mt-1">
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="student" className="cursor-pointer"
                                    checked={input.role == 'student'}
                                    onChange={changeEventHandler}
                                />
                                <Label>Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="recruiter" className="cursor-pointer"
                                    checked={input.role == 'recruiter'}
                                    onChange={changeEventHandler}
                                />
                                <Label>Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Profile</Label>
                        <Input accept="image/*" type="file" className="w-full p-2 border rounded mt-1 cursor-pointer"
                            onChange={changeFileHandler}
                        />
                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2>Please Wait ...</Button> : <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                            Signup
                        </Button>
                    }
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
