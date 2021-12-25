import React, { Component } from "react";

export class Letter extends Component {
  selectLetter = () => {
    if (this.props.selected) {
      return null;
    }

    if (this.props.selectLetter) {
      return this.props.selectLetter(this.props.letter);
    }

    return null;
  };

  getClass() {
    let letterClass = "letter";

    if (this.props.selected) return letterClass + " selected";
    else if (this.props.selected === false)
      return letterClass + " non-selected";

    return letterClass;
  }

  render() {
    return (
      <span onClick={this.selectLetter} className={this.getClass()}>
        {this.props.letter}
      </span>
    );
  }
}

export default Letter;
