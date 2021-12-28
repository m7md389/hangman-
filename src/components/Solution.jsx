import React from "react";
import "../styles/solution.css";
import Letter from "./Letter";

const Solution = function (props) {
  const getLetter = (char) => {
    if (char === " ") return char;
    return props.letters[char.toUpperCase()] ? char : "_";
  };

  const getHintClasses = () => {
    if (props.isShownHint) return "shown hint";
    return "hint hidden";
  };

  return (
    <div className="solution">
      <div className="word">
        {[...props.solution.word].map((char, index) => {
          return <Letter key={index} letter={getLetter(char)} />;
        })}
      </div>

      <div className={"hint-container"} onClick={props.onShowHint}>
        <em>Hint: </em>
        <em className={getHintClasses()}>{props.solution.hint}</em>
      </div>
    </div>
  );
};

export default Solution;
