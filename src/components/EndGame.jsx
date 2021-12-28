import React from "react";
import "../styles/end_game.css";

import { Cat } from "react-kawaii";

const EndGame = function ({ gameStatus, wordsLeft, onRestart }) {
  const getCat = () => {
    if (gameStatus === "won")
      return <Cat size={180} mood="excited" color="#A6E191" />;
    if (gameStatus === "lost")
      return <Cat size={180} mood="ko" color="#FDA7DC" />;
  };

  const getPlayAgain = () => {
    return wordsLeft === 0 ? (
      <h3>No More Words!</h3>
    ) : (
      <button className={getButtonClasses()} onClick={onRestart}>
        Play Again
      </button>
    );
  };

  const getButtonClasses = () => {
    return "restart" + (gameStatus === "lost" ? " lost" : "");
  };

  if (gameStatus === "playing") return null;

  return (
    <div className="end-game">
      {getCat()}
      {getPlayAgain()}
    </div>
  );
};

export default EndGame;
