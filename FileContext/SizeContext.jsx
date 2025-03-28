"use client"

import { createContext, useContext, useState } from "react";

const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
  const [width, setWidth] = useState("350");
  const [height, setHeight] = useState("350");

  return (
    <SizeContext.Provider value={{ width, setWidth, height, setHeight }}>
      {children}
    </SizeContext.Provider>
  );
};

export const useSizeContext = () => useContext(SizeContext); // Size yaha se jayega sb jagah
