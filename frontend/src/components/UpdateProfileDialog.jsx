import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';

export const UpdateProfileDialog = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);
    const [loading, setLoading] = useState(false);

    const [input, setInput] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        bio: '',
        skills: '',
        file: null
    });

    useEffect(() => {
        if (user) {
            setInput({
                fullName: user.fullName || '',
                email: user.email || '',
                phoneNumber: user.phoneNumber || '',
                bio: user.profile?.bio || '',
                skills: user.profile?.skills?.join(', ') || '',
                file: user.profile?.resume || null
            });
        }
    }, [user, open]);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileChangeHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] || null });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills.split(',').map(skill => skill.trim()));

        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                setOpen(false);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Update failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg w-full p-6 rounded-lg shadow-lg bg-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="fullName" className="text-gray-700 font-medium">Name</Label>
                        <Input id="fullName" name="fullName" value={input.fullName} onChange={changeEventHandler} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                        <Input id="email" name="email" value={input.email} onChange={changeEventHandler} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input id="phoneNumber" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="bio" className="text-gray-700 font-medium">Bio</Label>
                        <Input id="bio" name="bio" value={input.bio} onChange={changeEventHandler} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="skills" className="text-gray-700 font-medium">Skills (comma separated)</Label>
                        <Input id="skills" name="skills" value={input.skills} onChange={changeEventHandler} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="file" className="text-gray-700 font-medium">Resume</Label>
                        <Input id="file" name="file" type="file" accept="application/pdf" onChange={fileChangeHandler} className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white text-gray-700" />
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-200 disabled:opacity-50" disabled={loading}>
                            {loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : "Update"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
