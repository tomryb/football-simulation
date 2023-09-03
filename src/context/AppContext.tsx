import React, { createContext, useContext, useState } from "react";
import { AppContextProps, AppProviderProps } from "../utils/interfaces";

const AppContext = createContext<AppContextProps | undefined>(
  undefined
);

export default function AppProvider({ children }: AppProviderProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState({ teamA: 0, teamB: 0, teamC: 0 });
  const [time, setTime] = useState(0);

  const startMatch = () => {
    setIsRunning(true);
  };

  const stopMatch = () => {
    setIsRunning(false);
  };

  const resetMatch = () => {
    setIsRunning(false);
    setScore({ teamA: 0, teamB: 0, teamC: 0 });
    setTime(0);
  };

  const updateTime = (newTime: number) => {
    setTime(newTime);
  };

  const updateScore = (team: "teamA" | "teamB" | "teamC") => {
    setScore((prevScore) => ({
      ...prevScore,
      [team]: prevScore[team] + 1,
    }));
  };

  return (
    <AppContext.Provider
      value={{ isRunning, startMatch, stopMatch, resetMatch, score, time, updateTime, updateScore }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
