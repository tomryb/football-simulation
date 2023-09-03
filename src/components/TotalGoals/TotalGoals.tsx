import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function TotalGoals() {
  const appContext = useAppContext();

  if (!appContext) {
    console.error("App context not available.");
    return null;
  }

  const { score } = appContext;
  const totalGoals = score.teamA + score.teamB + score.teamC;

  return (
    <div className="total-goals">
      <h3>Total Goals</h3>
      <p>{totalGoals}</p>
    </div>
  );
}
