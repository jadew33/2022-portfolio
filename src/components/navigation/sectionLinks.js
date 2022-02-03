import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import downChevron from '../../assets/chevron-down.svg'

export function GoToNext({ nextScene }) {
    return (<Link className='section-nav blinkText next' to={nextScene} smooth={true} duration={1000} spy={true}>Next
        <img src={downChevron} /></Link>)
}