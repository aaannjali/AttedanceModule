'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { GiSettingsKnobs } from "react-icons/gi";

const Searchbar = () => {
    const [rowsFilter, setRowsFilter] = useState('10');
    const [monthFilter, setMonthFilter] = useState('January');
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const rowOptions = ['', '25', '50', '100'];
  
    return (
      <div className="w-full bg-white">

        {/* Search and filter section */}
        <div className="p-3 flex items-center space-x-4"    >

          {/* Search bar with button */}
          <div className="flex items-center flex-1 max-w-md">

            <div className="relative flex items-center">
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4  text-gray-300 text-xl" />
              <input
                type="text"
                placeholder="Search "
                className="w-full pl-10 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 text-gray-600 placeholder:text-sm"
              />
            </div>
  
          </div>
  
          {/* Filter section */}
          <div className="flex  space-x-3 relative">
            <div className="flex items-center text-gray-600">
              <GiSettingsKnobs className="h-5 w-5 mr-1 " />
              <span className="text-sm font-medium">Filter :</span>
            </div>
  
            {/* Rows filter dropdown */}
            <div className="relative ">
              <select
                value={rowsFilter}
                onChange={(e) => setRowsFilter(e.target.value)}
                className=" appearance-none text-black bg-white border border-gray-300 rounded-3xl px-3 py-1.5 pr-8 text-sm focus:outline-none focus:border-blue-500"
              >
                {rowOptions.map(option => (
                  <option key={option} value={option}>{option} Rows</option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
  
            {/* Months filter dropdown */}
            <div className="relative">
              <select
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
                className="appearance-none bg-white  text-black border border-gray-300 rounded-3xl px-3 py-1.5 pr-8 text-sm focus:outline-none focus:border-blue-500"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className=" w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Searchbar