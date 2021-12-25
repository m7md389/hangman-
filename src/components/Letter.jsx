import React, { Component } from "react";

export class Letter extends Component {
  render() {
    return (
      <span onClick={this.handleSelectLetter} className={this.getClasses()}>
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

  getClasses() {
    let classes = "letter";

    if (this.props.selected) return classes + " selected";

    if (this.props.selected === false) return classes + " non-selected";

    return classes;
  }
}

export default Letter;
