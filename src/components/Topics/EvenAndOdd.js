import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  onClick() {
    let evens = [];
    let odds = [];
    this.state.userInput
      .split(",")
      .map(num => (num % 2 ? odds.push(num) : evens.push(num)));

    this.setState({
      evenArray: evens,
      oddArray: odds,
      userInput: ""
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" type="text" onChange={this.onChange} />
        <button className="confirmationButton" onClick={this.onClick}>
          Split
        </button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds: {this.state.oddArray}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
