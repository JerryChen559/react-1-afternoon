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

  filterOnClick = val => {
    let unFilteredArray = this.state.unFilteredArray;
    let Fil = [];

    for (let i = 0; i < unFilteredArray.length; i++) {
      if (unFilteredArray[i].includes(val)) {
        Fil.push(unFilteredArray[i]);
      }
    }
    this.setState({ filteredArray: Fil });
  };

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={this.inputOnChange}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterOnClick(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
