// src/RatingStars.js
import React from 'react';

const RatingStars = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex space-x-2">
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;

        return (
          <svg
            key={index}
            className={`w-8 h-8 ${
              starValue <= rating ? 'text-green-600' : 'text-gray-100'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .587l3.668 7.431 8.332 1.209-6.036 5.893 1.42 8.279L12 18.896l-7.384 3.883 1.42-8.279L0 9.227l8.332-1.209z" />
          </svg>
        );
      })}
    </div>
  );
};

export default RatingStars;
