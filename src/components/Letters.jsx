import React, { Component } from "react";
import Letter from "./Letter";

export class Letters extends Component {
  render() {
    return (
      <div className="letters">
        <h4>Available Letters:</h4>
        <div>
          {Object.keys(this.props.letters).map((l) => {
            return (
              <Letter
                key={l}
                letter={l}
                selected={this.props.letters[l] ? true : false}
                handleSelectLetter={this.props.handleSelectLetter}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Letters;
