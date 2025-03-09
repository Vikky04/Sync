import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);

    return (
        <div className="min-h-screen bg-[#eeeee4]">
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 pt-10 px-4'>
                <div className='flex items-center justify-between my-5 gap-4'>
                    <Input
                        className="flex-1 p-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
                        placeholder="Filter companies by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button 
                        className='bg-indigo-600 hover:bg-indigo-800 text-white hover:text-black font-semibold p-2 rounded-full transition-colors shadow-md'
                        onClick={() => navigate("/admin/companies/create")}
                    >
                        New Company
                    </Button>
                </div>
                <CompaniesTable/>
            </div>
        </div>
    )
}

export default Companies;