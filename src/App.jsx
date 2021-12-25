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
      wordsLeft: this.words.length,
    };
  }

  words = [
    {
      word: "Ameer",
      hint: "A name!",
      played: false,
    },
    {
      word: "Shokre",
      hint: "A name!",
      played: false,
    },
    // {
    //   word: "Lotem",
    //   hint: "The best teacher!",
    //   played: false,
    // },
    // {
    //   word: "Byte",
    //   hint: "The test!",
    //   played: false,
    // },
    // {
    //   word: "FullStack",
    //   hint: "Our course",
    //   played: false,
    // },
    // {
    //   word: "New York",
    //   hint: "Richest city in the world",
    //   played: false,
    // },
  ];

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
          handleSelectLetter={this.handleSelectLetter}
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

    const newWordsLeft = this.state.wordsLeft - 1;
    this.setState({ wordsLeft: newWordsLeft });

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
        toast("Wow so easy!");
      }
    } else {
      newScore -= 20;

      if (newScore <= 0) {
        newScore = 0;
        newGameStatus = "lost";
        toast("Game Over!");
      }
    }

    this.setState({
      letters: newLetters,
      score: newScore,
      gameStatus: newGameStatus,
    });
  };

  handleRestart = () => {
    this.setState({
      letters: this.generateletters(),
      solution: this.randomSolution(),
      score: 100,
      gameStatus: "playing",
    });
  };
}

export default App;
