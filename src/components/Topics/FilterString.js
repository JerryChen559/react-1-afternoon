import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredArray: []
    };

    this.inputOnChange = this.inputOnChange.bind(this);
    this.filterOnClick = this.filterOnClick.bind(this);
  }

  inputOnChange(e) {
    this.setState({ userInput: e.target.value });
  }

  // JS logic is not there
  filterOnClick() {
    let Fil = [];

    for (let i; i < this.state.unFilteredArray.length; i++) {
      if (this.state.unFilteredArray[i].includes(this.state.userInput)) {
        Fil.push(this.state.unFilteredArray[i]);
      }
    }
    this.setState({ filteredArray: Fil });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer",
          "Mark", "Maddy"]
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={this.inputOnChange}
        />
        <button className="confirmationButton" onClick={this.filterOnClick}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {this.state.filteredArray}
        </span>
      </div>
    );
  }
}

export default FilterString;
