import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Pen, Mail, Phone } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import { UpdateProfileDialog } from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const resume = true;
export const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);
  // const skills = ["React", "JavaScript", "CSS", "Node.js", "MongoDB", "Express", "Tailwind CSS"];
  console.log(user);
  return (
    <div className="bg-[#eeeee4] min-h-screen pt-5">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-2xl" >
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="w-24 h-24 rounded-full border-4 border-gray-300">
            <AvatarImage src="https://picsum.photos/100" alt="profile" className="rounded-full" />
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user?.fullName}</h1>
            <p className="text-gray-600 mt-1">{user?.profile?.bio}</p>
          </div>
          <Button onClick={() => setOpen(true)} variant="outline" className="ml-auto flex items-center gap-2 text-white bg-black rounded-full px-4 py-2">
            <Pen className="h-4 w-4" /> <span className="text-lg">Edit</span>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-gray-700 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-black" />
            <span className="text-lg">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-black" />
            <span className="text-lg">{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {
              user?.profile?.skills.map((skill, index) => (
                <div key={index} className="px-4 py-2 bg-black text-white rounded-full text-md font-medium shadow-md">
                  {skill}
                </div>
              ))}
          </div>
        </div>

        {/* Resume Section */}
        {/* <div className="mb-8">
          <Label className="text-gray-800 font-semibold text-2xl">Resume</Label>
          <div className="mt-2">
            {resume ? (
              <a target="_blank" rel="noopener noreferrer" href={user?.profile?.resume} className="text-blue-600 hover:underline">
                {user?.profile?.resumeOrgName}
              </a>
            ) : (
              <span className="text-gray-500">No resume uploaded</span>
            )}
          </div>
        </div> */}
        <div className="mb-8">
          <Label className="text-gray-800 font-semibold text-2xl mb-2 block">Resume</Label>
          <div className="mt-2 p-4 bg-white shadow-md rounded-lg">
            {resume ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={user?.profile?.resume}
                className="text-blue-500 font-medium hover:text-blue-800 transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  📄 {user?.profile?.resumeOrgName}
                </span>
              </a>
            ) : (
              <span className="text-gray-500">No resume uploaded</span>
            )}
          </div>
        </div>


        {/* Applied Jobs */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applied Jobs</h2>
          <AppliedJobTable />
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
