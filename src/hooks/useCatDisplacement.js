import { useState, useEffect } from "react";

export default function useCatDisplacement(width) {
    const [catLocation, setCatLocation] = useState(0);
    function downHandler({ key }) {
        if ((key === 'd' || key === 'D' || key === 'ArrowRight') && (catLocation < width - 180)) {
            setCatLocation(catLocation + 5)
        }
        else if ((key === 'a' || key === 'A' || key === 'ArrowLeft') && catLocation > 0) {
            setCatLocation(catLocation - 5)
        }
        else setCatLocation(catLocation)
    }
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount
    return catLocation;
}
