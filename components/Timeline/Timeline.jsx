"use client";

import React from "react";

const Timeline = () => {
  const timestamps = Array.from({ length: 6 }, (_, index) => index * 10);

  return (
    <div className="flex items-center w-full h-8">
      <div className="relative w-full h-px bg-gray-300">
        {timestamps.map((time, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{ left: `${(time / 50) * 100}%` }}
          >
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <span className="text-xs text-gray-700 mt-1">{time}s</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
