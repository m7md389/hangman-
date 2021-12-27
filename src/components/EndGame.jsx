import React, { Component } from "react";
import { Cat } from "react-kawaii";
import Restart from "./Restart";

const EndGame = function (props) {
  const getCat = () => {
    if (props.gameStatus === "won")
      return <Cat size={180} mood="excited" color="#A6E191" />;
    if (props.gameStatus === "lost")
      return <Cat size={180} mood="ko" color="#FDA7DC" />;
  };

  const getPlayAgain = () => {
    return props.wordsLeft === 0 ? (
      <h3>No More Words!</h3>
    ) : (
      <Restart
        className={getButtonClasses()}
        handleRestart={props.handleRestart}
      />
    );
  };

  const getButtonClasses = () => {
    return "restart" + (props.gameStatus === "lost" ? " lost" : "");
  };

  if (props.gameStatus === "playing") return null;

  return (
    <div className="end-game">
      {getCat()}
      {getPlayAgain()}
    </div>
  );
};

export default EndGame;
