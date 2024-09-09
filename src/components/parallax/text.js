import React from "react";

export default function ParallaxText({ catPosition, width }) {
  return (
    <div className="parallax__text">
      <p className={`${catPosition > 0.1 * width ? "hideText" : "showText"} `}>
        I&apos;m a 4th-year Computer Science student at Queen&apos;s University
        with a strong Java, Python, and JavaScript foundation. I developed an
        interest in full-stack development several years ago and learned
        technologies like React, HTML/CSS, Node.js, and various databases.
      </p>
      <p
        className={`${
          catPosition > 0.15 * width && catPosition < width * 0.3
            ? "showText"
            : "hideText"
        }`}
      >
        My last internship was at Opencare, a startup, where I spent a year as a
        Frontend Developer. There, I had the opportunity to make larger-scale
        changes that directly contributed to a significant increase in company
        metrics.
      </p>
      <p
        className={`${
          catPosition > 0.35 * width && catPosition < width * 0.5
            ? "showText"
            : "hideText"
        }`}
      >
        Recently, I was a Senior Developer at Queen&apos;s Tech & Media
        Association, where I led the development of a start-up product. I was
        also the Frontend Development Director at Queen&apos;s Computing
        Students&apos; Association, where I oversaw both developers and
        designers.
      </p>
      <p
        className={`${
          catPosition > 0.55 * width && catPosition < width * 0.7
            ? "showText"
            : "hideText"
        }`}
      >
        Prior to these roles, I was the Co-chair of Queen&apos;s Web Development
        Club, where I led the executives to provide an educational experience
        and spread my passion for web development to its 400+ members. I was
        also an Education Director and Team Lead at QWeb.
      </p>
      <p
        className={`${
          catPosition > 0.75 * width && catPosition < width * 0.9
            ? "showText"
            : "hideText"
        }`}
      >
        I love technology and work hard towards bettering myself as a developer
        everyday. However, I also enjoy things outside of tech such as dancing,
        learning languages, and playing games with friends. I also own two cats
        &#x1F483;&#128008;&#x1F408;
      </p>
    </div>
  );
}
