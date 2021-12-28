import React from "react";
import "../styles/solution.css";
import Letter from "./Letter";

const Solution = function ({ letters, solution, isShownHint, onShowHint }) {
  const getLetter = (char) => {
    if (char === " ") return char;
    return letters[char.toUpperCase()] ? char : "_";
  };

  const getHintClasses = () => {
    if (isShownHint) return "shown hint";
    return "hint hidden";
  };

  return (
    <div className="solution">
      <div className="word">
        {[...solution.word].map((char, index) => {
          return <Letter key={index} letter={getLetter(char)} />;
        })}
      </div>

      <div className={"hint-container"} onClick={onShowHint}>
        <em>Hint: </em>
        <em className={getHintClasses()}>{solution.hint}</em>
      </div>
    </div>
  );
};

export default Solution;
