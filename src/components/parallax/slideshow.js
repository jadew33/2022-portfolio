import React, { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import GoToNext from '../navigation/next-nav';
import ParallaxText from './text';

export default function ParallaxLoad() {
    const { width } = useWindowDimensions();
    const [catX, setCatX] = useState(0);

    const updateCatPos = (displacement) => {
        if (catX + displacement < 0 || catX + displacement > width) setCatX(catX);
        setCatX(catX + displacement)
    }

    return <div className='parallax2'>
        <div className='parallax2--wrapper' >
            <div className={`pos parallax2--first `} />
            <div className={`pos parallax2--second `} style={{ backgroundPosition: `${-(.5 * catX)}px` }} />
            <div className={`pos parallax2--third`} style={{ backgroundPosition: `${-(.8 * catX)}px` }} />
            <div className={`pos parallax2--fourth`} style={{ backgroundPosition: `${-(1 * catX)}px` }} />
            <ParallaxText catPosition={catX} width={width} />
        </div>
        <div className='nav'>
            {catX > 0 && <div className='nav-left' onClick={() => updateCatPos(-.2 * width)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
            </div>}
            {catX < .8*width && <div className='nav-right' onClick={() => updateCatPos(.2*width)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>
            }
        </div>
        {catX >= width * .8 && <GoToNext nextScene="scene3" />}
    </div>
}
