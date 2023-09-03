import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function Button() {

  const appContext = useAppContext();

  const { isRunning, resetMatch, stopMatch, startMatch } = appContext;

  if (!appContext) {
    console.error("App context not available.");
    return null;
  }
  const handleButtonClick = () => {
    if (!isRunning) {
      startMatch();
    } else {
      stopMatch();
    }
  };

  const handleResetClick = () => {
    resetMatch();
  };

  return (
    <div className="button-controls">
      <button onClick={handleButtonClick} data-testid="button">
        {isRunning ? "Finish" : "Start"}
      </button>
      {isRunning ? null : (
        <button onClick={handleResetClick} disabled={isRunning}>
          Reset
        </button>
      )}
    </div>
  );
}
