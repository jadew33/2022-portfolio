import React from "react";

export default function ParallaxText({ catPosition, width }) {
  return (
    <div className="parallax__text">
      <p className={`${catPosition > 0.1 * width ? "hideText" : "showText"} `}>
        My passion for web dev started 6 years ago when I was introduced to GUIs
        in Java. I thought that it would be so nice to have a career making
        functional, appealing components.
      </p>
      <p
        className={`${
          catPosition > 0.15 * width && catPosition < width * 0.3
            ? "showText"
            : "hideText"
        }`}
      >
        I am a computer science student at Queen’s University who is comfortable
        working with front-end technologies such as React, JavaScript, Node.js,
        HTML, CSS, as well as connecting them to databases like MongoDB and
        consuming various APIs.
      </p>
      <p
        className={`${
          catPosition > 0.35 * width && catPosition < width * 0.5
            ? "showText"
            : "hideText"
        }`}
      >
        I spent my high school years working in fast food, vastly improving my
        communication and leadership skills. It taught me how to manage time and
        deal with stress all the while pushing out high quality products.
      </p>
      <p
        className={`${
          catPosition > 0.55 * width && catPosition < width * 0.7
            ? "showText"
            : "hideText"
        }`}
      >
        Currently, I am a co-chair at our web dev club, where I oversee the club
        and ensure things are running smoothly. Last year I was an education
        director and team lead, where I created tutorials and guided my team to
        develop a client project.
      </p>
      <p
        className={`${
          catPosition > 0.75 * width && catPosition < width * 0.9
            ? "showText"
            : "hideText"
        }`}
      >
        Currently, I am doing a year long coop at Opencare. Here I have the
        chance to work with our apps written in AngularJS and React, making
        changes as well as adding new additions to provide a better experience
        for our users.
      </p>
    </div>
  );
}
