import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import solutions from "./solutions";

class App extends Component {
  constructor() {
    super();
    this.solutions = solutions;
    this.state = {
      letters: this.generateLetters(),
      solution: this.randomSolution(),
      score: this.INITIAL_SCORE,
      gameStatus: "playing",
      isShownHint: false,
    };
  }

  INITIAL_SCORE = 100;

  generateLetters = () => {
    let letters = {};
    for (let i = 65; i < 91; i++) {
      letters[String.fromCharCode(i)] = false;
    }
    return letters;
  };

  randomSolution = () => {
    const randomIndex = Math.floor(Math.random() * this.solutions.length);
    const solution = this.solutions[randomIndex];
    this.solutions = this.solutions.filter((s) => s.word !== solution.word);
    return solution;
  };

  isGmeOver = (newLetters) => {
    for (const char of this.state.solution.word.toUpperCase()) {
      if (!newLetters[char]) {
        if (char !== " ") return false;
      }
    }
    return true;
  };

  handleSelectLetter = (letter) => {
    let letters = Object.assign({}, this.state.letters);
    let score = this.state.score;
    let gameStatus = this.state.gameStatus;
    letters[letter] = true;

    if (this.state.solution.word.toUpperCase().includes(letter)) {
      score += 5;

      if (this.isGmeOver(letters)) {
        gameStatus = "won";
        toast.success("Good Work!");
      }
    } else {
      score -= 20;

      if (score <= 0) {
        score = 0;
        gameStatus = "lost";
        toast.error("Game Over!");
      }
    }

    this.setState({ letters, score, gameStatus });
  };

  handleKeyPress = (event) => {
    const keyCode = event.code;
    if (!keyCode.startsWith("Key")) return null;

    const key = keyCode.slice(-1);
    if (this.state.letters[key]) return null;

    this.handleSelectLetter(key);
  };

  handleRestart = () => {
    this.setState({
      letters: this.generateLetters(),
      solution: this.randomSolution(),
      score: this.INITIAL_SCORE,
      gameStatus: "playing",
      isShownHint: false,
    });
  };

  handleShowHint = () => {
    this.setState({ isShownHint: true });
  };

  render() {
    return (
      <div
        className="app"
        tabIndex={0}
        onKeyPress={(e) => {
          this.handleKeyPress(e);
        }}
      >
        <Score score={this.state.score} />
        <Solution
          letters={this.state.letters}
          solution={this.state.solution}
          gameStatus={this.state.gameStatus}
          isShownHint={this.state.isShownHint}
          onShowHint={this.handleShowHint}
        />
        <Letters
          letters={this.state.letters}
          solution={this.state.solution}
          onSelectLetter={this.handleSelectLetter}
          gameStatus={this.state.gameStatus}
        />
        <EndGame
          gameStatus={this.state.gameStatus}
          onRestart={this.handleRestart}
          wordsLeft={this.solutions.length}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
