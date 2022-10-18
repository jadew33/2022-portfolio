import React from "react";
import useCatDisplacement from "../../hooks/useCatDisplacement";

import useKeyPress from "../../hooks/useKeyPress";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import GoToNext from "../navigation/next-nav";
import Cat from "./cat";
import ParallaxText from "./text";

export default function ParallaxLoad() {
  const { width } = useWindowDimensions();
  const catX = useCatDisplacement(width);

  const leftPress = useKeyPress(["a", "A", "ArrowLeft"]);
  const rightPress = useKeyPress(["d", "D", "ArrowRight"]);

  const direction = () => {
    if (leftPress) return "left";
    if (rightPress) return "right";
    return null;
  };
  return (
    <div className="parallax">
      <div className="parallax--wrapper">
        <div className={`pos parallax--first ${direction()}`}></div>
        <div
          className={`pos parallax--second ${direction()}`}
          style={{ backgroundPosition: `${-(0.5 * catX)}px` }}
        />
        <div
          className={`pos parallax--third ${direction()}`}
          style={{ backgroundPosition: `${-(0.8 * catX)}px` }}
        />
        <div
          className={`pos parallax--fourth ${direction()}`}
          style={{ backgroundPosition: `${-(1 * catX)}px` }}
        />
        <ParallaxText catPosition={catX} width={width} />
      </div>
      <Cat
        orientation={direction()}
        moveLeft={leftPress}
        moveRight={rightPress}
        width={width}
      />
      <p
        className={`forward instructions  ${
          catX === 0 ? "showText" : "hideText"
        }`}
      >
        Hold d to move forward, a to move back
      </p>
      {catX > width * 0.75 && <GoToNext nextScene="scene3" />}
    </div>
  );
}
