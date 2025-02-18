'use client';
import React, { useState } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { GiSettingsKnobs } from "react-icons/gi";

const Searchbar = () => {
  const [rowsFilter, setRowsFilter] = useState('10');
  const [monthFilter, setMonthFilter] = useState('July');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const rowOptions = ['', '10', '25', '50', '100'];

  return (
    <div className="w-full bg-blue-50 p-3">
      
      {/* Single Row Layout */}
      <div className="flex items-center justify-between w-full gap-4">

        {/* Left Side: Search + Filters */}
        <div className="flex items-center space-x-2 flex-1">

          {/* Search Bar */}
          <div className="relative flex items-center w-full max-w-64">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-600 placeholder:text-sm"
            />
          </div>

          {/* Filter Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-gray-600">
              <GiSettingsKnobs className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Filters</span>
            </div>

            {/* Rows Filter */}
            <select
              value={rowsFilter}
              onChange={(e) => setRowsFilter(e.target.value)}
              className="bg-white border border-gray-300 rounded-full px-3 py-1.5 text-sm text-black focus:outline-none focus:border-blue-200"
            >
              {rowOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            {/* Months Filter */}
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
              className="bg-white border text-black border-gray-300 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex space-x-2">
          {/* Export Button */}
          <button className="flex items-center px-4 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-700">
            Export <FaChevronDown className="ml-2" />
          </button>

          {/* Detailed View Button */}
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full ">
            Detailed View <FaChevronDown className="ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Searchbar;
