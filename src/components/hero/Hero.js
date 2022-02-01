import React from 'react';
import Browser from './Browser';
import Terminal from './Terminal';

export default function Hero() {
    return <div className='hero'>
        <Terminal />
        <Browser />
    </div>
}