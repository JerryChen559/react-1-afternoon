import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "JC",
          age: 29,
          glasses: true,
          shirtColor: "blue",
          title: "CEO"
        },
        { name: "T", age: 24, glasses: false, shirtColor: "black" },
        { name: "J", age: 26, shirtColor: "blue", title: "roommate" },
        { name: "B", glasses: false, shirtColor: "blue", title: "Boss" }
      ],
      userInput: "",
      filteredArray: []
    };

    this.inputOnChange = this.inputOnChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  inputOnChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  onClick(val) {
    let Fil = [];
    let unFilteredArray = this.state.unFilteredArray;

    for (let i = 0; i < unFilteredArray.length; i++) {
      if (unFilteredArray[i].hasOwnProperty(val)) {
        Fil.push(unFilteredArray[i]);
      }
    }

    this.setState({
      filteredArray: Fil
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={this.inputOnChange}
        />
        <button
          className="confirmationButton"
          onClick={() => this.onClick(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
