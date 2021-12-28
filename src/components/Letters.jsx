import React from "react";
import "../styles/letters.css";
import Letter from "./Letter";

const Letters = function ({ gameStatus, letters, solution, onSelectLetter }) {
  if (gameStatus !== "playing") return null;
  return (
    <div className="letters">
      <h2>Available Letters:</h2>
      <div>
        {Object.keys(letters).map((l) => {
          return (
            <Letter
              key={l}
              letter={l}
              selected={letters[l]}
              onSelectLetter={onSelectLetter}
              solution={solution}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Letters;
