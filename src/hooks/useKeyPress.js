import { useEffect, useState } from "react";

export default function useKeyPress(targets) {
  const [keyPressed, setKeyPressed] = useState(false);
  function downHandler({ key }) {
    targets.map((target) => {
      if (key === target) setKeyPressed(true);
      return null;
    });
  }
  const upHandler = ({ key }) => {
    targets.map((target) => {
      if (key === target) setKeyPressed(false);
      return null;
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
