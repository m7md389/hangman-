import React, { Component } from "react";
import Letter from "./Letter";

export class Letters extends Component {
  render() {
    return (
      <div className="letters">
        <h4>Available Letters:</h4>
        {Object.keys(this.props.letters).map((l) => {
          const selected = this.props.letters[l] ? true : false;
          return (
            <Letter
              key={l}
              letter={l}
              selected={selected}
              selectLetter={this.props.selectLetter}
            />
          );
        })}
      </div>
    );
  }
}

export default Letters;
