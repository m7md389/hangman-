import React from "react";
import "../styles/letter.css";

const Letter = function ({ selected, letter, solution, onSelectLetter }) {
  const handleSelectLetter = () => {
    if (selected) return null;
    if (onSelectLetter) {
      return onSelectLetter(letter);
    }
    return null;
  };

  const getLetterClasses = () => {
    let classes = "letter";
    if (selected) {
      if (solution.word.toUpperCase().includes(letter))
        return classes + " selected-true";
      return classes + " selected-false";
    }
    if (selected === false) return classes + " non-selected";
    return classes;
  };

  return (
    <span onClick={handleSelectLetter} className={getLetterClasses()}>
      {letter}
    </span>
  );
};

export default Letter;
