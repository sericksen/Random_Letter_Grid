import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { WordGrid } from "./WordGrid.js";
import { ErrorBoundary } from "./ErrorBoundary.js";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ErrorBoundary>
        <WordGrid />
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
