import React, { useState } from 'react';
import idle from '../../assets/idlecat.gif'
import love from '../../assets/lovingcat.png'
import heart from '../../assets/heart.gif'
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Browser() {
    const [showLove, setShowLove] = useState(false);
    const { width } = useWindowDimensions();
    return <div className='hero__browser'>
        <span onMouseEnter={() => setShowLove(true)} onMouseLeave={() => setShowLove(false)}>
            <img className='cat' src={showLove ? love : idle} alt="cat animation" />
            {(showLove && width > 724) && <img className='love' src={heart} alt="floating hearts" />}
        </span>
    </div>
}