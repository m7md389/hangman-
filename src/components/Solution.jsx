import React, { Component } from "react";
import Letter from "./Letter";

export class Solution extends Component {
  render() {
    const hiddenChar = "_";
    return (
      <div className="solution">
        {[...this.props.solution.word].map((char, index) => {
          let letter = this.props.letters[char.toUpperCase()]
            ? char
            : hiddenChar;
          if (char === " ") {
            letter = char;
          }
          return <Letter key={index} letter={letter} />;
        })}
        <div className="hint">
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;