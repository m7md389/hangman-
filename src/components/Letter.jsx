import React, { Component } from "react";

export class Letter extends Component {
  render() {
    return (
      <span
        onClick={this.handleSelectLetter}
        className={this.getLetterClasses()}
      >
        {this.props.letter}
      </span>
    );
  }

  handleSelectLetter = () => {
    if (this.props.selected) return null;
    if (this.props.handleSelectLetter) {
      return this.props.handleSelectLetter(this.props.letter);
    }

    return null;
  };

  getLetterClasses() {
    let classes = "letter";
    if (this.props.selected) {
      if (this.props.solution.word.toUpperCase().includes(this.props.letter))
        return classes + " selected-true";
      return classes + " selected-false";
    }
    if (this.props.selected === false) return classes + " non-selected";
    return classes;
  }
}

export default Letter;
