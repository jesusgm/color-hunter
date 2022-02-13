import React from "react";
import ReactDOM from "react-dom";

import Game from "./game/game";

import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
