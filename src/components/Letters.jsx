import React, { Component } from "react";
import Letter from "./Letter";

export class Letters extends Component {
  render() {
    if (this.props.gameStatus !== "playing") return null;
    return (
      <div className="letters">
        <h2>Available Letters:</h2>
        <div>
          {Object.keys(this.props.letters).map((l) => {
            return (
              <Letter
                key={l}
                letter={l}
                selected={this.props.letters[l]}
                handleSelectLetter={this.props.handleSelectLetter}
                solution={this.props.solution}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Letters;
