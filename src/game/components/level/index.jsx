import React from "react";

import "./styles.css";

function Level({ level, onSucess, onFail }) {
  let numberOfCircles = 4;

  const renderCircles = () => {
    const circles = [];

    //generate random rgb color
    const red =
      Math.floor(Math.random() * 16).toString(16) +
      Math.floor(Math.random() * 16).toString(16);
    const green =
      Math.floor(Math.random() * 16).toString(16) +
      Math.floor(Math.random() * 16).toString(16);
    const blue =
      Math.floor(Math.random() * 16).toString(16) +
      Math.floor(Math.random() * 16).toString(16);

    const randIndex = Math.floor(Math.random() * numberOfCircles);

    for (let i = 0; i < numberOfCircles; i++) {
      circles.push(
        <div
          className="circle"
          key={i}
          onClick={() => {
            if (i === randIndex) {
              onSucess();
            } else {
              onFail();
            }
          }}
          style={{
            backgroundColor: `#${red}${green}${blue}`,
            filter:
              i === randIndex
                ? `brightness(calc(0.40 + 0.${
                    level * 2 < 10 ? `0${level * 2}` : level * 2
                  }))`
                : "brightness(1)",
          }}
        ></div>
      );
    }

    return circles;
  };

  return (
    <div
      className="level"
      style={{
        gridTemplateColumns: `repeat(${numberOfCircles / 2}, 1fr)`,
        gridTemplateRows: "1fr 1fr",
      }}
    >
      {renderCircles()}
    </div>
  );
}

export default Level;
