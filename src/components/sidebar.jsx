'use client'
import { FaCalendarAlt, FaUsers, FaWallet, FaBars } from 'react-icons/fa';
import { CgLogOff } from "react-icons/cg";
import { useState } from 'react';

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='w-full h-[1015px] '>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white"
            >
                <FaBars className="w-6 h-6" />
            </button>

            <div className={`
        h-full bg-blue-800 flex flex-col items-center p-4
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:w-28 sm:w-12
        ${isMobileMenuOpen ? 'w-32 translate-x-0' : 'w-32 -translate-x-full'}
      `}>
                {/* Logo */}
                <div className="bg-transparent mb-4 overflow-hidden text-white text-3xl flex flex-col items-center">
                    <span className='py-4'>P</span>
                </div>

                {/* User Profile */}
                <div className="flex flex-col items-center w-full">
                    <div className="w-28 sm:w-32 md:w-36 lg:w-28 h-[1px] bg-gray-500 mb-6"></div>
                    <div className="p-0 w-20 h-20 rounded-full bg-white overflow-hidden shadow-sm">
    <img
        src="/logo2.jpg"
        alt="User Profile"
        className=" w-full  object-cover"
    />
</div>


                    <div className="w-28 sm:w-32 md:w-36 lg:w-28 h-[0.5px] bg-gray-500 mt-6"></div>
                </div>

                {/* Navigation Icons */}
                <nav className="flex flex-col gap-6 mt-4">
                    <button className="p-3  hover:bg-blue-700 rounded-lg transition-colors">
                        <FaCalendarAlt className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 hover:bg-blue-700 rounded-lg transition-colors">
                        <FaUsers className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 hover:bg-blue-700 rounded-lg transition-colors">
                        <FaWallet className="w-6 h-6 text-white" />
                    </button>
                </nav>
                <button className='pt-96 text-4xl '>
                <CgLogOff className='hover:bg-blue-700 rounded-3xl' />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;