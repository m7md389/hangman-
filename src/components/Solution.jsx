import React, { Component } from "react";
import Letter from "./Letter";

export class Solution extends Component {
  constructor() {
    super();
    this.state = {
      class: "hint hidden",
    };
  }
  render() {
    return (
      <div className="solution">
        <div className="word">
          {[...this.props.solution.word].map((char, index) => {
            return <Letter key={index} letter={this.getLetter(char)} />;
          })}
        </div>

        <div className={"hint-container"} onClick={this.handleShowHint}>
          <em>Hint: </em>
          <em className={this.state.class}>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }

  getLetter(char) {
    if (char === " ") return char;
    return this.props.letters[char.toUpperCase()] ? char : "_";
  }

  handleShowHint = () => {
    this.setState({ class: "hint shown" });
  };
}

export default Solution;
