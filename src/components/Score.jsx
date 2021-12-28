import React from "react";
import "../styles/score.css";

const Score = function ({ score }) {
  const getScoreClasses = () => {
    let rank;

    if (score >= 80) rank = "high";
    else if (score >= 50) rank = "medium";
    else rank = "low";

    return `score ${rank}-score`;
  };

  return <div className={getScoreClasses()}>{score}</div>;
};

export default Score;
