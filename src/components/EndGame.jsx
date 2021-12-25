import React, { Component } from "react";
import { Cat } from "react-kawaii";

export default class EndGame extends Component {
  render() {
    let cat;

    if (this.props.gameStatus === "playing") return null;

    if (this.props.gameStatus === "won")
      cat = <Cat size={180} mood="excited" color="#A6E191" />;
    else if (this.props.gameStatus === "lost")
      cat = <Cat size={180} mood="ko" color="#FDA7DC" />;

    return <div className="end-game">{cat}</div>;
  }
}
