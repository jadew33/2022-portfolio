import React, { useState, useEffect } from 'react';
import catIdle from '../../assets/cat/gifs/cat03_idle_blink_8fps.gif'
import catWalk from '../../assets/cat/gifs/cat03_run_12fps.gif'
import useCatDisplacement from '../../hooks/useCatDisplacement';

export default function Cat({ orientation, width }) {
    const catX = useCatDisplacement(width);
    return (
        <img src={(orientation === 'right' || orientation === 'left') ? catWalk : catIdle}
            style={{ left: `${catX}px`, transform: `${orientation === 'left' ? 'scaleX(-1)' : ''}` }} />
    )
}