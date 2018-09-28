import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkOnClick = this.checkOnClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({ userInput: e.target.value });
  }

  checkOnClick() {
    let reversedPal = this.state.userInput
      .split("")
      .reverse()
      .join("");

    if (reversedPal === this.state.userInput) {
      return this.setState({ palindrome: reversedPal });
    } else {
      return this.setState({ palindrome: "false" });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          type="text"
          className="inputLine"
          onChange={this.handleInputChange}
        />
        <button className="confirmationButton" onClick={this.checkOnClick}>
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
