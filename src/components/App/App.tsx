import React from "react";
import matchesData from "../../data/matches.json";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContext";
import TotalGoals from "../TotalGoals/TotalGoals";
import Match from "../Match/Match";

export default function App() {
  const appContext = useAppContext();

  const { time } = appContext;

  return (
    <div className="App">
      <h1>Katar 2023</h1>
      <p>Time: {time} seconds</p>
      <Button />
      {matchesData.map((match) => (
        <Match key={match.id} name={match.name} />
      ))}
      <TotalGoals />
    </div>
  );
}
