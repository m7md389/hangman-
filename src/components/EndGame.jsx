import React, { Component } from "react";
import { Cat } from "react-kawaii";

export default class EndGame extends Component {
  render() {
    if (this.props.gameStatus === "playing") return null;

    return (
      <div className="end-game">
        {this.getCat()}
        {this.getPlayAgain()}
      </div>
    );
  }

  getCat() {
    if (this.props.gameStatus === "won")
      return <Cat size={180} mood="excited" color="#A6E191" />;
    if (this.props.gameStatus === "lost")
      return <Cat size={180} mood="ko" color="#FDA7DC" />;
  }

  getPlayAgain() {
    return this.props.wordsLeft === 0 ? (
      <h3>No More Words!</h3>
    ) : (
      <button className="restart" onClick={this.props.handleRestart}>
        Play Again
      </button>
    );
  }
}
