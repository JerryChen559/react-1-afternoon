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

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  onClick(prop) {
    let filteredstuff = [];
    this.state.userInput.filter(
      obj => (obj.hasOwnProperty(prop) ? filteredstuff.push(obj) : null)
    );

    this.setState({
      filteredArray: filteredstuff,
      userInput: ""
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {/* Original: {this.state.unFilteredArray} this code is breaking app */}
        </span>
        <input className="inputLine" type="text" onChange={this.onChange} />
        <button className="confirmationButton" onClick={this.onClick}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {this.state.filteredArray}
        </span>
      </div>
    );
  }
}

export default FilterObject;
