import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };

    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
    this.sumOnClick = this.sumOnClick.bind(this);
  }

  handleNum1(e) {
    this.setState({
      number1: e.target.value
    });
  }

  handleNum2(e) {
    this.setState({
      number2: e.target.value
    });
  }

  sumOnClick() {
    let total = 1 * this.state.number1 + 1 * this.state.number2;
    this.setState({
      sum: total
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="text" className="inputLine" onChange={this.handleNum1} />
        <input type="text" className="inputLine" onChange={this.handleNum2} />
        <button className="confirmationButton" onClick={this.sumOnClick}>
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
// note: this is not adding
