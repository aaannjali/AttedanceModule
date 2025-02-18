"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const UserCard = ({ profilePic, name, role, department, isSelected, onClick }) => {
    return (
        <div 
            className={`w-80 h-20  ${isSelected ? 'bg-violet-200' : 'bg-blue-100'} rounded-xl border border-gray-200 cursor-pointer transition-all duration-200 mb-3 hover:shadow-lg transform hover:-translate-y-1`}
            onClick={onClick}
        >
            <div className="flex items-center m-3 p-1 ">
                <div className="relative w-12 h-12 mr-4">
                    <Image 
                        src={profilePic} 
                        alt={name} 
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-sm text-gray-600 font-medium">{role}</p>
                        <div className="h-4 w-[1px] bg-gray-300"></div>
                        <p className="text-sm text-gray-500">{department}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Users = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const users = [
        { id: 1, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Intern', department: 'Development' },
        { id: 2, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Product Manager', department: 'Product' },
        { id: 3, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Designer', department: 'Design' },
        { id: 4, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Product Manager', department: 'Product' },
        { id: 5, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Designer', department: 'Design' },
        { id: 6, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Intern', department: 'Development' },
        { id: 7, profilePic: '/logo3.jpg', name: 'Bhaskar Sharma', role: 'Product Manager', department: 'Product' }
       
    ];

    return (
        <div className="  sm:px-4  px-1 bg-blue-50 pl-2 ">
            <div className="flex flex-col flex-wrap justify-center gap-2 pt-4">
                {users.map(user => (
                    <UserCard 
                        key={user.id}
                        {...user}
                        isSelected={selectedCard === user.id}
                        onClick={() => setSelectedCard(selectedCard === user.id ? null : user.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;