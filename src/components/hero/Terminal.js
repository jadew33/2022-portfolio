import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Terminal() {
    const { height, width } = useWindowDimensions();
    return (
        <div className='terminal'>
            <span >{'//'} Hello World! </span> <br /><br />
            <span className='variable-type'>let</span > <span className='variable-name'>person</span> = {'{'} <br />
            <span className='key'>name: </span>
            <span className='value'>'Jade Wei'</span>,<br />
            <span className='key'>type: </span>
            <span className='value'>'Front End Developer'</span>,<br />
            <span className='key'>location: </span>
            <span className='value'>'Canada'</span>,<br />
            {'}'};<br /><br />
            <span className='component'>{'<'} Cat {'/>'}</span> <br /><br /><br />
            {(height > 840 || (height > 500 && width > 700) || (width > 930 && height > 675)) && <span style={{ maxWidth: '' }}>{'//'}  Welcome to my collection of odds and ends -- web dev edition!
            </span>}
        </div>
    )
}
