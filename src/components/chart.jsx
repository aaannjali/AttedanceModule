"use client";
import { FaLink, FaEllipsisV, FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock1, CiUser } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const dummyData = [
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            
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
    },
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
    },
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
    },
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
        plannedTime: "09:00 AM - 06:30 PM ",
        actualTime: "09:01 AM - 06:32 PM ",
        fineBonus: "+₹500",
        lastAmount: "+₹300",
        errors: [
            { type: "time", message: "Late arrival by 90 minutes" },
            { type: "user", message: "Biometric verification failed" }
        ],
        calAtt: "P",
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

export default function AttendanceTable() {
    return (
        <div className="p-4 min-h-screen w-full bg-white flex">
            <div className="w-full max-w-full p-4 rounded-lg shadow-lg overflow-x-auto">
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
                        {dummyData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition">
                                <td className="p-3 border border-gray-300">{row.date}</td>
                                <td className="p-3 border border-gray-300">{row.plannedTime}</td>
                                <td className={`p-3 border border-gray-300 ${row.actualTime.includes("32 PM") ? "text-red-500" : "text-black"}`}>
                                    {row.actualTime}
                                </td>
                                <td className="p-3 border border-gray-300">
                                    <span className="text-green-600">{row.fineBonus}</span>
                                    {row.lastAmount && <span className="line-through ml-2 text-gray-500">{row.lastAmount}</span>}
                                    <BsThreeDotsVertical className="inline ml-2 text-gray-500 cursor-pointer" />
                                </td>
                                <td className="p-3  flex space-x-2 ">
                                    {row.errors?.map((error, i) => {
                                        const icon = error.type === "location" ? <FaMapMarkerAlt className="text-red-500" /> :
                                            error.type === "time" ? <CiClock1 className="text-red-500" /> :
                                                error.type === "user" ? <CiUser className="text-red-500" /> : 
                                                <FaMapMarkerAlt className="text-red-500" />;
                                        return icon && <span key={i} title={error.message}>{icon}</span>;
                                    })}
                                </td>
                                <td className="p-3 border text-green-500 border-gray-300">{row.calAtt}</td>
                                <td className="p-3 border border-gray-300">
                              
                                    {row.finalAtt }
                                   
                                    </td>
                                
                                <td className="p-3 flex gap-2 border border-1">
                                    <FaLink className="text-gray-500 cursor-pointer hover:text-blue-500 transition" />
                                    <span>3</span>
                                    <FaRegComment />
                                    <span>3</span>
                                    <FaChevronDown />

                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
