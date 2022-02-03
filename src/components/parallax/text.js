import React from 'react';

export default function ParallaxText({ catPosition, width }) {
    return (
        <div className='parallax__text'>
            <p className={`${catPosition > (.1)*width ? 'hideText' : 'showText'} `}>
                My passion for web dev started 4 years ago when I was introduced to GUIs in Java.
                I thought that it would be so nice to have a career making functional, appealing components.
            </p>
            <p className={`${catPosition > (.15)*width && catPosition < width*(.3) ? 'showText' : 'hideText'}`}>
                I am a computer science student at Queen’s University who is comfortable working with front-end
                technologies such as React, JavaScript, Node.js, HTML, CSS, as well as connecting them to databases
                like MongoDB and consuming various APIs.
            </p>
            <p className={`${catPosition > (.35)*width && catPosition < width*(.5) ? 'showText' : 'hideText'}`}>
                I spent my high school years working in fast food, vastly improving my communication and leadership
                skills. It taught me how to manage time and deal with stress all the while pushing out high quality products.
            </p>
            <p className={`${catPosition > (.55)*width && catPosition < width*(.7) ? 'showText' : 'hideText'}`}>
                I am both an education director and team lead at our web dev club, where I create tutorials and guide my
                team to create websites for clients. Recently, I interned at InnovFin, where I had the opportunity to further
                my skills with React, AWS, and integrating various APIs.
            </p>
            <p className={`${catPosition > (.75)*width && catPosition < width*(.9) ? 'showText' : 'hideText'}`}>
                Currently, I am doing a year long coop at Opencare. Here I have the chance to work with our apps written in
                Angular and React, making changes as well as adding new additions to better accomodate the needs of our patients.
            </p>
        </div>
    )
} 