import React from 'react';
import catIdle from '../../assets/cat/idle.gif'
import catWalk from '../../assets/cat/run.gif'
import useCatDisplacement from '../../hooks/useCatDisplacement';

export default function Cat({ orientation, width }) {
    const catX = useCatDisplacement(width);
    return (
        <img src={(orientation === 'right' || orientation === 'left') ? catWalk : catIdle}
            style={{ left: `${catX}px`, transform: `${orientation === 'left' ? 'scaleX(-1)' : ''}` }} />
    )
}