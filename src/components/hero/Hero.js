import React from 'react';
import Browser from './Browser';
import Terminal from './Terminal';
import idle from '../../assets/idlecat.gif'
import GoToNext from '../navigation/next-nav';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Hero() {
    const { height, width } = useWindowDimensions();
    return (
        <div className='hero'>
            <Terminal />
            {(width > 769 && height < 1359) ? <Browser /> :
                <img className='mobile-cat' src={idle} alt="cat animation" />}
            {(width > 700 && height > 800) && <GoToNext nextScene="scene2" text="next" />}
        </div>
    );
}