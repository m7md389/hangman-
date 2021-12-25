import React, { Component } from "react";
import Letter from "./Letter";

export class Solution extends Component {
  render() {
    return (
      <div className="solution">
        <div className="word">
          {[...this.props.solution.word].map((char, index) => {
            return <Letter key={index} letter={this.getLetter(char)} />;
          })}
        </div>

        <div className="hint">
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }

  getLetter(char) {
    if (char === " ") return char;

    return this.props.letters[char.toUpperCase()] ? char : "_";
  }
}

export default Solution;
