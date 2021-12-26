import React, { Component } from "react";

export class Score extends Component {
  render() {
    return <div className={this.getScoreClasses()}>{this.props.score}</div>;
  }

  getScoreClasses() {
    let rank;

    if (this.props.score >= 80) rank = "high";
    else if (this.props.score >= 50) rank = "medium";
    else rank = "low";

    return `score ${rank}-score`;
  }
}

export default Score;
