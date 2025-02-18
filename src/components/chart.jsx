"use client";
import { FaLink, FaEllipsisV, FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock1, CiUser } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';

const dummyData = [
    
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "location", message: "location is not verified" },
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:02 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "location", message: "Location not verified" },
            { type: "time", message: "Late arrival by 1 minute" }
        ],
        calAtt: "P + OT",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 09:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P - OT",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 03:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "location", message: "Location not verified" },
            { type: "time", message: "Late arrival by 1 minute" }
        ],
        calAtt: "P + OT - OT",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 09:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 09:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "location", message: "Location not verified" },
            { type: "time", message: "Late arrival by 1 minute" }
        ],
        calAtt: "P + OT",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 05:32 PM",
        fineBonus: "-₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P + OT",
        finalAtt: "P",
    }
    ,
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "-₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "location", message: "Location not verified" },
            { type: "time", message: "Late arrival by 1 minute" }
        ],
        calAtt: "P - OT",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM ",
        actualTime: "09:01 AM - 06:32 PM ",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P + OT - OT",
        finalAtt: "P",
    }
    ,
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "location", message: "Location not verified" },
            { type: "time", message: "Late arrival by 1 minute" }
        ],
        calAtt: "P",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P",
        finalAtt: "P",
    }
];

const attendanceOptions = ['P', 'P+OT', 'P-LT', 'P+WO', 'P+WO+OT'];

// Utility function to calculate time difference and determine color
const getTimeColor = (actualTime) => {
    const [startTime, endTime] = actualTime.split(" - ");
    const standardEndTime = "06:31 PM";
    const standardWorkHours = "09:00"; // 9 hours exactly
    
    // Convert time to 24-hour format for comparison
    const convertTo24Hour = (time) => {
        const [rawTime, period] = time.split(" ");
        let [hours, minutes] = rawTime.split(":");
        hours = parseInt(hours);
        
        if (period === "PM" && hours !== 12) {
            hours += 12;
        } else if (period === "AM" && hours === 12) {
            hours = 0;
        }
        
        return { hours, minutes: parseInt(minutes) };
    };

    const start = convertTo24Hour(startTime);
    const end = convertTo24Hour(endTime);
    const standardEnd = convertTo24Hour(standardEndTime);

    // Calculate work duration in minutes
    const workDuration = (end.hours * 60 + end.minutes) - (start.hours * 60 + start.minutes);
    
    // Convert standard work hours (09:00) to minutes
    const [standardHours, standardMinutes] = standardWorkHours.split(":");
    const standardDuration = parseInt(standardHours) * 60 + parseInt(standardMinutes);

    // Compare end time with standard end time
    const endTimeInMinutes = end.hours * 60 + end.minutes;
    const standardEndTimeInMinutes = standardEnd.hours * 60 + standardEnd.minutes;

    // Add the duration to the cell text
    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    };

    const actualDuration = formatDuration(workDuration);

    if (endTimeInMinutes < standardEndTimeInMinutes || workDuration < standardDuration) {
        return {
            color: "text-red-500",
            duration: actualDuration
        };
    } else if (endTimeInMinutes > standardEndTimeInMinutes || workDuration > standardDuration) {
        return {
            color: "text-yellow-500",
            duration: actualDuration
        };
    }
    return {
        color: "text-black",
        duration: actualDuration
    };
};



export default function AttendanceTable() {
    const [data, setData] = useState(dummyData);
    const [count, setCount] = useState(3);

  const toggleCount = () => {
    setCount((prevCount) => (prevCount === 10 ? 3 : prevCount + 1));
  };
    return (
        
            <div className=" bg-white  p-4 mt-8 ml-4 rounded-lg shadow-lg overflow-x-auto ">
                <table className="w-full border border-gray-300 text-black">
                    <thead className=" text-lg font-semibold">
                        <tr className="border border-gray-300">
                            <th className="p-3 border border-gray-300 text-left">Date</th>
                            <th className="p-3 border border-gray-300 text-left">Time Planned + WH </th>
                            <th className="p-3 border border-gray-300 text-left">Actual Time</th>
                            <th className="p-3 border border-gray-300 text-left">Fine/Bonus</th>
                            <th className="p-3 border border-gray-300 text-left">Error</th>
                            <th className="p-3 border border-gray-300 text-left">Calc. Att.</th>
                            <th className="p-3 border border-gray-300 text-left">Final Att.</th>
                            <th className="p-3 border border-gray-300 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-100 transition">
                                <td className="p-3 border border-gray-300">{row.date}</td>
                                <td className="p-3 border border-gray-300">{row.plannedTime}</td>
                                <td className={`p-3 border border-gray-300  ${getTimeColor(row.actualTime).color}`}>
                                    {row.actualTime} | {getTimeColor(row.actualTime).duration}
                                </td>
                                <td className="p-3 border border-gray-300">
                                    <span className="text-green-600">{row.fineBonus}</span>
                                    {row.lastAmount && <span className="line-through ml-2 text-gray-500">{row.lastAmount}</span>}
                                    <BsThreeDotsVertical className="inline ml-2 text-gray-500 cursor-pointer" />
                                </td>
                                <td className="p-3 flex space-x-2 border-t border-gray-300">
                                    {[
                                        { type: 'location', icon: <FaMapMarkerAlt className="text-red-500" /> },
                                        { type: 'time', icon: <CiClock1 className="text-red-500" /> },
                                        { type: 'user', icon: <CiUser className="text-red-500 text-bold" /> }
                                    ].map((item, index) => {
                                        const error = row.errors?.find(err => err.type === item.type);
                                        return (
                                            <span key={index} className="w-6">
                                                {error && <span title={error.message}>{item.icon}</span>}
                                            </span>
                                        );
                                    })}
                                </td>
                                <td className={`p-3 border border-gray-300 text-green-400`}>{row.calAtt}</td>
                                <td className="p-3 border border-gray-300 relative">
                                    <div className="flex items-center justify-between cursor-pointer" 
                                         onClick={(e) => {
                                             const dropdown = e.currentTarget.nextElementSibling;
                                             dropdown.classList.toggle('hidden');
                                         }}>
                                        <span>{row.finalAtt || 'Select'}</span>
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                    <div className="absolute hidden left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
                                        {attendanceOptions.map((option, optionIndex) => (
                                            <div
                                                key={optionIndex}
                                                className={`p-2 hover:bg-gray-100 cursor-pointer ${
                                                    option === row.finalAtt ? 'bg-gray-50' : ''
                                                }`}
                                                onClick={(e) => {
                                                    // Update the finalAtt value
                                                    const updatedData = [...data];
                                                    updatedData[rowIndex].finalAtt = option;
                                                    setData(updatedData);
                                                    // Hide the dropdown after selection
                                                    e.currentTarget.parentElement.classList.add('hidden');
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </td>

                                <td className="p-3 flex gap-2 border border-1 cursor-pointer" onClick={toggleCount}>
      <FaLink className="text-gray-500 hover:text-blue-500 transition" />
      <span>{count}</span>
      <FaRegComment />
      <span>{count}</span>
      <FaChevronDown />
    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        
    );
}
