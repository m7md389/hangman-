import React, { Component } from "react";

const Restart = function (props) {
  return (
    <button className={props.className} onClick={props.handleRestart}>
      Play Again
    </button>
  );
};

export default Restart;
