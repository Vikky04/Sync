import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'
// import { useSelector } from 'react-redux'

export const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
    });
    const {loading, user} = useSelector(store=>store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        // if (input.file) {
        //     formData.append("file", input.file);
        // }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            if(res.data.success){
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }finally{
            dispatch(setLoading(false));
        }
    }
   useEffect(()=>{
    if(user){
        navigate("/");
    }
   },[])

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <form onSubmit={submitHandler} className="bg-white shadow-lg rounded-lg p-8 w-96">
                    <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Email</Label>
                        <Input type="email" placeholder="Sync@gmail.com" className="w-full p-2 border rounded mt-1"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Password</Label>
                        <Input type="password" className="w-full p-2 border rounded mt-1"
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
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2>Please Wait ...</Button> : <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                        Login
                    </Button>
                    }
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
