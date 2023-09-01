import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ReactSimpleFlagsProvider } from "react-simple-flags";
import App from "./App";
import flags from "./flags.json";

type JSONFlags = [string, boolean][];

ReactDOM.render(
  <ReactSimpleFlagsProvider initialFlags={new Map(flags as JSONFlags)}>
    <App />
  </ReactSimpleFlagsProvider>,
  document.getElementById("root")
);
