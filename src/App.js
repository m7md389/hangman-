import "./App.css";

import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      letters: this.generateletters(),
      solution: this.randomSolution(),
      score: 100,
      gameStatus: "playing",
    };
  }

  randomSolution = () => {
    const words = [
      {
        word: "Ameer",
        hint: "A name!",
      },
      {
        word: "Shokre",
        hint: "A name!",
      },
      {
        word: "Lotem",
        hint: "The best teacher!",
      },
      {
        word: "Byte",
        hint: "The test!",
      },
      {
        word: "FullStack",
        hint: "Our course",
      },
      {
        word: "New York",
        hint: "Richest city in the world",
      },
    ];

    const randomIndex = Math.floor(Math.random() * words.length);
    return words[words.length - 1];
  };

  generateletters() {
    let letters = {};
    for (let i = 65; i < 91; i++) {
      letters[String.fromCharCode(i)] = false;
    }
    return letters;
  }

  finished = (newStatus) => {
    for (const char of this.state.solution.word.toUpperCase()) {
      if (!newStatus[char]) {
        if (char !== " ") return false;
      }
    }
    return true;
  };

  selectLetter = (letter) => {
    if (["won", "lost"].includes(this.state.gameStatus)) {
      return;
    }

    let newStatus = Object.assign({}, this.state.letters);
    let newScore = this.state.score;
    let newGameStatus = this.state.gameStatus;

    newStatus[letter] = true;

    if (this.state.solution.word.toUpperCase().includes(letter)) {
      newScore += 5;

      if (this.finished(newStatus)) {
        newGameStatus = "won";
        toast("Wow so easy!");
      }
    } else {
      newScore -= 20;

      if (newScore < 0) {
        newScore = 0;
        newGameStatus = "lost";
        toast("Game Over!");
      }
    }

    this.setState({
      letters: newStatus,
      score: newScore,
      gameStatus: newGameStatus,
    });
  };

  render() {
    return (
      <div className="app">
        <Score score={this.state.score} />
        <Solution
          letters={this.state.letters}
          solution={this.state.solution}
          gameStatus={this.state.gameStatus}
        />
        <Letters
          letters={this.state.letters}
          selectLetter={this.selectLetter}
        />
        <EndGame gameStatus={this.state.gameStatus} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
