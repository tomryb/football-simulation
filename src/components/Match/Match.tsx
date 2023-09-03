import React, { useEffect, useState } from "react";
import { MatchProps } from "../../utils/interfaces";
import { useAppContext } from "../../context/AppContext";

export default function Match({ name }: MatchProps) {
  const [matchScore, setMatchScore] = useState({ teamA: 0, teamB: 0, teamC: 0 });
  const appContext = useAppContext();

  const { isRunning, time, stopMatch, updateScore, updateTime } = appContext;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && time < 90) {
      let prevTime = time;
      timer = setInterval(() => {
        prevTime += 1;
        updateTime(prevTime);

        if (prevTime % 10 === 0) {
          const randomTeam = Math.random() < 1 / 3 ? "teamA" : Math.random() < 2 / 3 ? "teamB" : "teamC";
          updateScore(randomTeam);
          setMatchScore((prevScore) => ({
            ...prevScore,
            [randomTeam]: prevScore[randomTeam] + 1,
          }));
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, stopMatch, updateTime, updateScore]);

  if (!appContext) {
    console.error('App context not available.');
    return null;
  }
  return (
    <>
    <div className="match">
      <h2>{name}</h2>
      <p>Score: {matchScore.teamA} - {matchScore.teamB}</p>
    </div>
    </>
  );
}
