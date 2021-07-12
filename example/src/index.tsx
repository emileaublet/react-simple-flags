import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ReactSimpleFlagsProvider } from "react-simple-flags";
import App from "./App";
import flags from "./flags.json";

ReactDOM.render(
  <ReactSimpleFlagsProvider initialFlags={flags}>
    <App />
  </ReactSimpleFlagsProvider>,
  document.getElementById("root")
);
