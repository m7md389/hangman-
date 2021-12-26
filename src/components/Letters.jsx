import React, { Component } from "react";
import Letter from "./Letter";

const Letters = function (props) {
  if (props.gameStatus !== "playing") return null;
  return (
    <div className="letters">
      <h2>Available Letters:</h2>
      <div>
        {Object.keys(props.letters).map((l) => {
          return (
            <Letter
              key={l}
              letter={l}
              selected={props.letters[l]}
              handleSelectLetter={props.handleSelectLetter}
              solution={props.solution}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Letters;
