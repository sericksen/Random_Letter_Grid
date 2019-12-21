import React from "react";

const tdStyle = {
  fontFamily: "'Lucinda Console', Monaco, monospace"
};
export class WordGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      columns: 10,
      table: []
    };
  }
  random() {
    let letter = Math.floor(Math.random() * (90 - 65)) + 65;
    let output = String.fromCharCode(letter);
    return output;
  }

  handleTable() {
    let columns = () => {
      let columnOut = [];
      let rowOut = [];
      for (let i = 0; i < this.state.rows; i++) {
        for (let j = 0; j < this.state.columns; j++) {
          columnOut.push(<td style={tdStyle}>{this.random()}</td>);
        }
        rowOut.push(<tr>{columnOut}</tr>);
        columnOut = [];
      }
      return rowOut;
    };
    return <table>{columns()}</table>;
  }

  handleStep() {
    let rows = document.getElementById("rowVal").value;
    let columns = document.getElementById("colVal").value;
    let output1 = document.getElementById("output1");
    let output2 = document.getElementById("output2");
    output1.innerHTML = rows;
    output2.innerHTML = columns;
    this.setState({ rows: output1.innerHTML, columns: output2.innerHTML });
  }

  render() {
    console.log(this.state.rows, this.state.columns);
    return (
      <div>
        <h1>Word Grid</h1>
        Rows: &nbsp;
        <input
          id="rowVal"
          type="range"
          min="1"
          max="50"
          step="1"
          value={this.state.rows}
          onInput={this.handleStep.bind(this)}
        />{" "}
        &nbsp; Value: <span id="output1" />
        <br />
        Columns: &nbsp;
        <input
          id="colVal"
          type="range"
          min="1"
          max="50"
          step="1"
          value={this.state.columns}
          onInput={this.handleStep.bind(this)}
        />{" "}
        &nbsp; Value: <span id="output2" />
        <br />
        {this.handleTable()}
        <br />
      </div>
    );
  }
}
