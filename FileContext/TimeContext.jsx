import React, { createContext, useState, useContext } from "react";


const TimeContext = createContext();


export const TimeProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <TimeContext.Provider
      value={{ startTime, setStartTime, endTime, setEndTime,currentTime, setCurrentTime,duration, setDuration }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTimeContext = () => { // Time ke lie
  return useContext(TimeContext);
};
