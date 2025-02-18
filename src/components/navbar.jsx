'use client'
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Final Reports");

  const tabs = [
    { name: "Atten. Team (Admin)", disabled: false },
    { name: "Org. Details (Admin)", disabled: false },
    { name: "In/Out Logs", disabled: false },
    { name: "Finalize Atten.", disabled: false },
    { name: "Manage Employees", disabled: false },
    { name: "Final Reports", disabled: false },
    { name: "Error Reports", disabled: false },
  ];

  return (
    <div className="bg-gray-100 shadow-md sticky top-0 z-50 border-1 border-gray-200 ">
      <div className="flex w-full">
        <div className="flex w-full h-10">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => !tab.disabled && setActiveTab(tab.name)}
              className={`px-0.5 h-full text-[15px] transition-all flex-shrink flex-grow-0 basis-[12%] ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed bg-gray-50 border-r-1 border border-gray-800"
                  : activeTab === tab.name
                  ? "text-blue-600 bg-white font-medium"
                  : "text-gray-700 hover:text-black border-r-1 border border-gray-200 "
              }`}
            >
              <span className="line-clamp-2 text-center px-0.5">{tab.name}</span>
            </button>
          ))}
          
        </div>
        <div >
        <p  className="px-12 pt-3 flex items-center justify-center text-blue-600 text-[12px] font-bold basis-[8%]  border-gray-200">
            Attendance 
            <span> Module</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;