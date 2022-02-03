import React from 'react';
import Browser from './Browser';
import Terminal from './Terminal';
import idle from '../../assets/idlecat.gif'
import { GoToNext } from '../navigation/sectionLinks';



export default function Hero({ width, height }) {
    return (
        <div className='hero'>
            <Terminal height={height} width={width} />
            {(width > 769 && height < 1359) ? <Browser /> :
                <img className='mobile-cat' src={idle} alt="cat animation" />}
            {(width > 700 && height > 800) && <GoToNext nextScene="scene2" text="next" />}
        </div>
    );
}