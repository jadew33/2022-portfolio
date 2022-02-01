import React, { useState } from 'react';
import catIdle from '../../assets/cat/gifs/cat03_idle_blink_8fps.gif'
import catWalk from '../../assets/cat/gifs/cat03_run_12fps.gif'

export default function Cat({ orientation, yDisplace, moveLeft, moveRight }) {
    const [catLocation, setCatLocation] = useState(0);
    console.log("rerender cat")
    console.log(moveRight)
    if (moveRight) setCatLocation(catLocation + 2)
    return (
        <div className='parallax__cat'>
            <img src={(orientation === 'right' || orientation === 'left') ? catWalk : catIdle} 
            style={{ left: `${catLocation}px`, top: `${yDisplace}px` ,transform: `${orientation === 'left' ? 'scaleX(-1)' : ''}` }} />
        </div>
    )
}