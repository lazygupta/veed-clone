"use client"

import { createContext, useContext, useState } from "react";

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  return (
    <FileContext.Provider value={{ fileUrl, setFileUrl, fileType, setFileType }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => useContext(FileContext);
