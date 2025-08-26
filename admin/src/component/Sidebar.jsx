

import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation() // get current path

    const links = [
        { path: '/add', icon: <IoIosAddCircleOutline className='w-[20px] h-[20px]' />, label: 'Add Items' },
        { path: '/lists', icon: <FaRegListAlt className='w-[20px] h-[20px]' />, label: 'List Items' },
        { path: '/orders', icon: <SiTicktick className='w-[20px] h-[20px]' />, label: 'View Orders' },
    ];

    return (
        <div className='w-[18%] min-h-[100vh] fixed left-0 top-0 py-[60px] bg-gradient-to-b from-[#0c2025] to-[#141414] border-r border-gray-700'>
            <div className='flex flex-col gap-4 pt-[40px] pl-[15%] text-[15px]'>
                {links.map((link, idx) => {
                    const isActive = location.pathname === link.path; // check if active
                    return (
                        <div
                            key={idx}
                            onClick={() => navigate(link.path)}
                            className={`flex items-center justify-center md:justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg transition-all 
                                ${isActive 
                                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
                                  : 'hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'}`}
                        >
                            {React.cloneElement(link.icon, { className: `text-white` })}
                            <p className='hidden md:block text-white font-medium'>{link.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
