import { useState, useEffect, useCallback } from "react";

export default function useCatDisplacement(width) {
  const [catLocation, setCatLocation] = useState(0);

  const downHandler = useCallback(
    ({ key }) => {
      setCatLocation((prevLocation) => {
        let newLocation = prevLocation;
        if (
          (key === "d" || key === "D" || key === "ArrowRight") &&
          prevLocation < width - 180
        ) {
          newLocation += 5;
        } else if (
          (key === "a" || key === "A" || key === "ArrowLeft") &&
          prevLocation > 0
        ) {
          newLocation -= 5;
        }
        return newLocation;
      });
    },
    [width]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      downHandler(e);
      requestAnimationFrame(() =>
        setCatLocation((prevLocation) => prevLocation)
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [downHandler]);

  return catLocation;
}
