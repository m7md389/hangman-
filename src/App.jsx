import "./App.css";

import { Component, Fragment } from "react";
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
      wordsLeft: this.words.length - 1,
    };
  }

  words = [
    {
      word: "Amazon",
      hint: "Jeff Bezos",
    },
    {
      word: "Cat",
      hint: "Pet",
    },
    {
      word: "Bytes",
      hint: "The test",
    },
    {
      word: "FullStack",
      hint: "Our course",
    },
    {
      word: "Lotem",
      hint: "A name",
    },
    {
      word: "New York",
      hint: "American state",
    },
    {
      word: "REACT",
      hint: "R in MERN",
    },
    {
      word: "Tea",
      hint: "Most consumed beverages around the world",
    },
  ].map((word) => {
    word.played = false;
    return word;
  });

  render() {
    return (
      <Fragment>
        <Score score={this.state.score} />
        <Solution
          letters={this.state.letters}
          solution={this.state.solution}
          gameStatus={this.state.gameStatus}
        />
        <Letters
          letters={this.state.letters}
          solution={this.state.solution}
          handleSelectLetter={this.handleSelectLetter}
          gameStatus={this.state.gameStatus}
        />
        <EndGame
          gameStatus={this.state.gameStatus}
          handleRestart={this.handleRestart}
          wordsLeft={this.state.wordsLeft}
        />
        <ToastContainer />
      </Fragment>
    );
  }

  generateletters() {
    let letters = {};
    for (let i = 65; i < 91; i++) {
      letters[String.fromCharCode(i)] = false;
    }
    return letters;
  }

  randomSolution = () => {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const newWord = this.words[randomIndex];

    if (newWord.played) return this.randomSolution();
    newWord.played = true;
    return newWord;
  };

  gameFinished = (newLetters) => {
    for (const char of this.state.solution.word.toUpperCase()) {
      if (!newLetters[char]) {
        if (char !== " ") return false;
      }
    }
    return true;
  };

  handleSelectLetter = (letter) => {
    if (["won", "lost"].includes(this.state.gameStatus)) return null;

    let newLetters = Object.assign({}, this.state.letters);
    let newScore = this.state.score;
    let newGameStatus = this.state.gameStatus;
    newLetters[letter] = true;

    if (this.state.solution.word.toUpperCase().includes(letter)) {
      newScore += 5;

      if (this.gameFinished(newLetters)) {
        newGameStatus = "won";
        toast.success("Good Work!");
      }
    } else {
      newScore -= 20;

      if (newScore <= 0) {
        newScore = 0;
        newGameStatus = "lost";
        toast.error("Game Over!");
      }
    }

    this.setState({
      letters: newLetters,
      score: newScore,
      gameStatus: newGameStatus,
    });
  };

  handleRestart = () => {
    let newWordsLeft = this.state.wordsLeft - 1;
    this.setState({
      letters: this.generateletters(),
      solution: this.randomSolution(),
      score: 100,
      gameStatus: "playing",
      wordsLeft: newWordsLeft,
    });
  };
}

export default App;
