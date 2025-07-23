import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const Rating = ({ rating }) => {
    // const stars = Array(rating).fill(MdOutlineStar)
    return (
        <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
                {Array.from({ length: Math.round(rating) }).map((_, index) => (
                    <MdOutlineStar key={index} className="h-4 w-4" />
                ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">3/5</span>
        </div>
    );
};

export default Rating;