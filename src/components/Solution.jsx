import React, { Component } from "react";
import Letter from "./Letter";

const Solution = function (props) {
  const getLetter = (char) => {
    if (char === " ") return char;
    return props.letters[char.toUpperCase()] ? char : "_";
  };

  return (
    <div className="solution">
      <div className="word">
        {[...props.solution.word].map((char, index) => {
          return <Letter key={index} letter={getLetter(char)} />;
        })}
      </div>

      <div className={"hint-container"} onClick={props.handleShowHint}>
        <em>Hint: </em>
        <em className={props.hintClass}>{props.solution.hint}</em>
      </div>
    </div>
  );
};

export default Solution;
