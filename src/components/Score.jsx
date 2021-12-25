import React, { Component } from "react";

export class Score extends Component {
  render() {
    return <div className={this.getClasses()}>{this.props.score}</div>;
  }

  getClasses() {
    let evaluation;

    if (this.props.score >= 80) evaluation = "high";
    else if (this.props.score >= 50) evaluation = "medium";
    else evaluation = "low";

    return `score ${evaluation}-score`;
  }
}

export default Score;
