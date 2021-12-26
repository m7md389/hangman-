import React, { Component } from "react";

const Letter = function (props) {
  const handleSelectLetter = () => {
    if (props.selected) return null;
    if (props.handleSelectLetter) {
      return props.handleSelectLetter(props.letter);
    }
    return null;
  };

  const getLetterClasses = () => {
    let classes = "letter";
    if (props.selected) {
      if (props.solution.word.toUpperCase().includes(props.letter))
        return classes + " selected-true";
      return classes + " selected-false";
    }
    if (props.selected === false) return classes + " non-selected";
    return classes;
  };

  return (
    <span onClick={handleSelectLetter} className={getLetterClasses()}>
      {props.letter}
    </span>
  );
};

export default Letter;
