import React, { createContext, useState, useContext } from "react";

// Create the context
const TimeContext = createContext();

// Context provider component
export const TimeProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  return (
    <TimeContext.Provider
      value={{ startTime, setStartTime, endTime, setEndTime }}
    >
      {children}
    </TimeContext.Provider>
  );
};

// Custom hook to use the context
export const useTimeContext = () => {
  return useContext(TimeContext);
};
