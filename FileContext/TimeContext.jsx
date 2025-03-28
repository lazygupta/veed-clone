import React, { createContext, useState, useContext } from "react";

// Create the context
const TimeContext = createContext();

// Context provider component
export const TimeProvider = ({ children }) => {
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("00:00:00");

  const handleTimeChange = (value, setTime) => {
    const timePattern = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    if (timePattern.test(value) || value === "") {
      setTime(value); 
    }
  };

  return (
    <TimeContext.Provider
      value={{ startTime, setStartTime, endTime, setEndTime, handleTimeChange }}
    >
      {children}
    </TimeContext.Provider>
  );
};

// Custom hook to use the context
export const useTimeContext = () => {
  return useContext(TimeContext);
};
