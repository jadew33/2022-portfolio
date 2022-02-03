import React, { useState } from 'react';
import useCatDisplacement from '../../hooks/useCatDisplacement';

import useKeyPress from '../../hooks/useKeyPress';
import { GoToPrevious, GoToNext } from '../navigation/sectionLinks';
import Cat from './cat';
import ParallaxText from './text';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function ParallaxLoad({ scrollPosition, width, height }) {
    const leftPress = useKeyPress(['a', 'A', 'ArrowLeft']);
    const rightPress = useKeyPress(['d', 'D', 'ArrowRight'])
    const catX = useCatDisplacement(width);

    // const [showBackInstructions, setShowBackInstructions] = useState(false);
    // c

    const direction = () => {
        if (leftPress) return 'left';
        if (rightPress) return 'right'
        return null;
    }

    return <div className='parallax'>
        <div className='parallax--wrapper' >
            <div className={`pos parallax--first ${direction()}`}></div>
            <div className={`pos parallax--second ${direction()}`} style={{ backgroundPosition: `${-(.5 * catX)}px` }}>
            </div>
            <div className={`pos parallax--third ${direction()}`} style={{ backgroundPosition: `${-(.8 * catX)}px` }}></div>
            <div className={`pos parallax--fourth ${direction()}`} style={{ backgroundPosition: `${-(1 * catX)}px` }}></div>
            <ParallaxText scrollPosition={scrollPosition} catPosition={catX} width={width} />
        </div>
        <Cat orientation={direction()} moveLeft={leftPress} moveRight={rightPress} width={width} />
        <p className={`forward instructions  ${catX === 0 ? "showText" : "hideText"}`}>Hold d or keyboard right to move forward</p>
      <p className={`back instructions  ${(catX > width*.45 && catX < width*.5) ? 'showText' : 'hideText'}`}>Hold a or keyboard left to move back</p>
        {catX > width*.8 && <GoToNext nextScene="scene3" style={{ right: 0 }}/>}
    </div>
}
 