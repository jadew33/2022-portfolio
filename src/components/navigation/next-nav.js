import React from 'react';
import { Link } from 'react-scroll'
import downChevron from '../../assets/chevron-down.svg'

export default function GoToNext({ nextScene }) {
    return (<Link className='section-nav blinkText next' to={nextScene} smooth={true} duration={1000} spy={true}>Next
        <img src={downChevron} alt="down arrow"/></Link>)
}