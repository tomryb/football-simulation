import { ReactNode } from "react";

export interface AppContextProps {
  isRunning: boolean;
  startMatch: () => void;
  stopMatch: () => void;
  resetMatch: () => void;
  score: { teamA: number; teamB: number; teamC: number };
  time: number;
  updateScore: (team: "teamA" | "teamB" | "teamC") => void;
  updateTime: (newTime: any) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}

export interface MatchProps {
  name: string;
}
