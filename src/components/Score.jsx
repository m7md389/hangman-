import React from "react";
import "../styles/score.css";

const Score = function (props) {
  const getScoreClasses = () => {
    let rank;

    if (props.score >= 80) rank = "high";
    else if (props.score >= 50) rank = "medium";
    else rank = "low";

    return `score ${rank}-score`;
  };

  return <div className={getScoreClasses()}>{props.score}</div>;
};

export default Score;
