"use client"

import { createContext, useContext, useState } from "react";

const PlaybackContext = createContext();

export const PlaybackProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlaybackContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlaybackContext = () => useContext(PlaybackContext); // Play Pause yaha se jayega sb jagah