'use client'
import Image from "next/image";

const ProfileSummary = () => {
  return (
    <div className="flex items-center justify-between p-8 ml-2  bg-white text-black  rounded-lg shadow-lg w-[1199px] font-bold ">
      {/* Profile Section */}
      <div className="flex items-center space-x-6 mr-12">
        <Image
          src="/logo3.jpg" // Replace with actual image URL
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h2 className="text-base font-semibold text-black">Bhaskar Sharma</h2>
          <p className="text-xs text-gray-500">Sales Manager | Sales Dept.</p>
        </div>
      </div>

      {/* Summary Table */}
      <div className="flex-1 max-w-[800px]">
        <table className="w-full text-xs bg-white border border-gray-300">
          <thead>
            <tr className=" text-black">
            <th className="border border-gray-300 p-1"></th>
              <th className="border border-gray-300 p-1">P</th>
              <th className="border border-gray-300 p-1">A</th>
              <th className="border border-gray-300 p-1">WO</th>
              <th className="border border-gray-300 p-1">Σ Bonus / Fine</th>
              <th className="border border-gray-300 p-1">OT</th>
              <th className="border border-gray-300 p-1">LT</th>
              <th className="border border-gray-300 p-1">OT + LT</th>
              <th className="border border-gray-300 p-1">Final Att.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
            <td className="border border-gray-300 p-1">Cal</td>
            
              <td className="border border-gray-300 p-1">17.5</td>
              <td className="border border-gray-300 p-1">2.5</td>
              <td className="border border-gray-300 p-1">11</td>
              <td className="border border-gray-300 p-1 text-green-600">+2000</td>
              <td className="border border-gray-300 p-1">17:32 H</td>
              <td className="border border-gray-300 p-1 text-red-500">-12:00 H</td>
              <td className="border border-gray-300 p-1">05:32 H</td>
              <td className="border border-gray-300 p-1 font-semibold">20</td>
              <td className="border border-gray-300 p-1 text-gray-800 text-xs">Finalised by Rahul</td>
            </tr>
            <tr className="text-center">
            <td className="border border-gray-300 p-1">Final</td>
              <td className="border border-gray-300 p-1">23.5</td>
              <td className="border border-gray-300 p-1">3.5</td>
              <td className="border border-gray-300 p-1">4</td>
              <td className="border border-gray-300 p-1 text-green-600">+400</td>
              <td className="border border-gray-300 p-1">12:30 H</td>
              <td className="border border-gray-300 p-1 text-red-500">-19:00 H</td>
              <td className="border border-gray-300 p-1">-06:30 H</td>
              <td className="border border-gray-300 p-1 font-semibold">27</td>
              <td className="border border-gray-300 p-1 text-gray-800 text-xs">Locked by Shriniwas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileSummary;