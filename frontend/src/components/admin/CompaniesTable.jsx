import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
    const { companies = [], searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.filter((company) => {
            if (!searchCompanyByText) return true;
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText]);

    return (
        <div className="p-4 bg-gray-900 shadow-xl rounded-2xl">
            <Table className="border-separate border-spacing-y-2">
                <TableCaption className="text-gray-400">A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gray-800">
                        <TableHead className="text-white text-lg p-4">Logo</TableHead>
                        <TableHead className="text-white text-lg p-4">Name</TableHead>
                        <TableHead className="text-white text-lg p-4">Date</TableHead>
                        <TableHead className="text-right text-white text-lg p-4">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterCompany.map((company) => (
                        <TableRow key={company._id} className="bg-gray-800 hover:bg-gray-700 transition-colors">
                            <TableCell className="p-4">
                                <Avatar>
                                    <AvatarImage src={company.logo} />
                                </Avatar>
                            </TableCell>
                            <TableCell className="font-semibold text-white p-4">{company.name}</TableCell>
                            <TableCell className="text-white p-4">{company.createdAt?.split("T")[0]}</TableCell>
                            <TableCell className="text-right p-4">
                                <Popover>
                                    <PopoverTrigger className="p-2 rounded-full hover:bg-gray-600 transition">
                                        <MoreHorizontal className="text-white" />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-32 bg-white shadow-lg rounded-lg">
                                        <div
                                            onClick={() => navigate(`/admin/companies/${company._id}`)}
                                            className='flex items-center gap-2 w-full cursor-pointer p-2 rounded-full transition-all duration-200 bg-blue-100 hover:bg-blue-600'>
                                            <Edit2 className="w-4 text-blue-600" />
                                            <span className="font-bold text-black">Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default CompaniesTable;
