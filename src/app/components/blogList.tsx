// src/components/ListItem.tsx
'use client'

import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';

interface ListItemProps {
    items: {
        title: string;
        subtitle: string;
        icon: string;
        minutes: number;
    }[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
    return (
        <div className="container bg-white py-2 px-4 border rounded-lg w-80">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Articles</h1>
            {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
                    <div>
                        <h2 className="text-base font-semibold text-gray-800">{item.title}</h2>
                        <p className="text-gray-500 text-sm">{item.subtitle}</p>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-gray-800 mr-1 ">
                            <FaRegPlayCircle />
                        </a>
                        <span className="text-gray-600">{item.minutes} min</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListItem;
