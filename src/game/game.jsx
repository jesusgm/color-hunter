import { useState } from "react";

import Header from "./components/header/";
import Level from "./components/level";

import "./game.css";

function Game() {
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);

  return (
    <div className="game">
      <Header level={level} lives={lives} />
      <div className="game-content">
        {lives === 0 ? (
          <>
            <h2>You lose at level {level}</h2>
            <button
              onClick={() => {
                setLevel(1);
                setLives(3);
              }}
            >
              Restart
            </button>
          </>
        ) : null}
        {level === 30 ? (
          <>
            <h2>You win!!!</h2>
            <button
              onClick={() => {
                setLevel(1);
                setLives(3);
              }}
            >
              Restart
            </button>
          </>
        ) : null}
        {lives > 0 && level < 30 ? (
          <Level
            level={level}
            onSucess={() => setLevel((level) => level + 1)}
            onFail={() => setLives((lives) => lives - 1)}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Game;
