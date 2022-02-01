import React from 'react';

export default function Terminal() {
    return (
        <div className='hero__terminal'>
            <span className='comment'>{'//'} Hello World! </span> <br /><br />
            <span className='variable-type'>let</span > <span className='variable-name'>person</span> = {'{'} <br />
            <span className='key'>name: </span>
            <span className='value'>'Jade Wei'</span>,<br />
            <span className='key'>type: </span>
            <span className='value'>'Front End Developer'</span>,<br />
            <span className='key'>location: </span>
            <span className='value'>'Canada'</span>,<br />
            {'}'};<br /><br />
            <span className='component'>{'<'} Cat {'/>'}</span>
        </div>
    )
}