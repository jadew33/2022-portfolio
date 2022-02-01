import React, { useEffect, useState } from 'react';

import useKeyPress from '../../hooks/useKeyPress';
import Cat from './cat';

export default function ParallaxLoad({ scrollPosition, width, height }) {
    // idea's jump scroll?
    console.log("rerender parallax")

    const calculateOffset = () => {
        let result = (scrollPosition - returnB(1, -640, 410, -110)) / returnM(1, -640, 410, -110);
        return scrollPosition > 300 ? -14 * 16 : result;
    };
    const calculateCatOffsetHorizontal = () => 64;
    const calculateCatOffsetVertical = () => (height - returnB(975, 695, 829, 665)) / returnM(975, 695, 829, 665);

    const leftPress = useKeyPress(['a', 'A', 'ArrowLeft']);
    const rightPress = useKeyPress(['d', 'D', 'ArrowRight'])

    const returnM = (y, x, y2, x2) => (y - y2) / (x - x2);
    const returnB = (y, x, y2, x2) => y - (x * returnM(y, x, y2, x2));

    const backgroundDirection = () => {
        if (leftPress) return 'animateBackgroundLeft';
        if (rightPress) return 'animateBackgroundRight'
        return null;
    }

    const catOrientation = () => {
        if (leftPress) return 'left';
        if (rightPress) return 'right'
        return undefined;
    }

    return <div className='parallax'>
        <div className='parallax--wrapper' style={{ top: `${calculateOffset()}px` }}>
            <div className={`pos parallax--first ${backgroundDirection()}`}></div>
            <div className={`pos parallax--second ${backgroundDirection()}`}></div>
            <div className={`pos parallax--third ${backgroundDirection()}`}></div>
            <div className={`pos parallax--fourth ${backgroundDirection()}`}></div>
            <Cat orientation={catOrientation()} yDisplace={calculateCatOffsetVertical()} moveLeft={leftPress} moveRight={rightPress}/>
        </div>
    </div>
}