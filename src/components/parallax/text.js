import React from 'react';

export default function ParallaxText({ scrollPosition, catPosition, width}) {
    return (
        <div className='parallax__text'>
            <div className={`${scrollPosition > 430 ? 'showText' : 'hideText'}`}>
                <p>
                    My passion for web dev started 4 years ago when I was introduced to GUIs in Java. I thought that it would be so nice to have a career making functional, appealing components.
                </p>
                <p>
                    I am a computer science student at Queen’s University who is comfortable working with front-end technologies such as React, JavaScript, Node.js, HTML, CSS, as well as connecting them to databases like MongoDB and consuming various APIs.
                </p>
                <p>
                    I spent my high school years working in fast food, vastly improving my communication and leadership skills. It taught me how to manage time and deal with stress all the while pushing out high quality products.
                </p>
                <p>
                    I am both an education director and team lead at our web dev club, where I create tutorials and guide my team to create websites for clients. Recently, I interned at InnovFin, where I had the opportunity to further my skills with React, AWS, and integrating various APIs.
                </p>
                <p>
                    Currently, I am doing a year long coop at Opencare. Here I have the chance to work with our apps written in Angular and React, making changes as well as adding new additions to better accomodate the needs of our patients.
                </p>
            </div>
        </div>
    )
} 