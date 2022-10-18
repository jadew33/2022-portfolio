import reskale from "../../assets/projects/Reskale.mp4";
import van from "../../assets/projects/VanTheMan.mp4";
import portfolio2021 from "../../assets/projects/Portfolio2021.mp4";
import catInsta from "../../assets/projects/cat-insta.mp4";
import anipals from "../../assets/projects/anipals.mp4";
import craftStore from "../../assets/projects/craft-store.mp4";

const projects = [
  <div>
    <video
      controls
      src={craftStore}
      type="video/mp4"
      className="left-spacing"
    />
    <div className="slide-text">
      <h1>Craft Store</h1>
      <p>
        Built twice using React, HTML/CSS (SASS) , one version using useContext
        and the other using Redux to manage state.{" "}
      </p>
      <a
        className="carousel-link hover-underline-animation"
        href="https://redux-craft-store.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Visit Site!
      </a>
    </div>
  </div>,
  <div>
    <video controls src={reskale} type="video/mp4" className="left-spacing" />
    <div className="slide-text">
      <h1>Re:Skale</h1>
      <p>
        Team project for HackThe6ix 2021, winning Scotiabank's FinTech for Young
        Women challenge. I worked on the front end, which was built using React,
        and HTML/CSS (SASS).
      </p>
    </div>
  </div>,
  <div>
    <video controls src={anipals} type="video/mp4" className="left-spacing" />
    <div className="slide-text">
      <h1>Anipals</h1>
      <p>
        Team project for TechNova2021. Built using React, HTML/CSS (SASS). Lead
        the front-end development, while mentoring someone new to programming.
      </p>
    </div>
  </div>,
  <div>
    <video controls src={van} type="video/mp4" className="left-spacing" />
    <div className="slide-text">
      <h1>VanTheMan's Portfolio</h1>
      <p>
        Team lead for a QWeb client project, leading a team of 3 to build a
        full-stack MERN app. Other than the front-end, I built the guestbook,
        where our client was able to interact with fans, storing it in MongoDB.{" "}
      </p>
      <a
        className="carousel-link hover-underline-animation"
        href="https://intense-chamber-72767.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Visit Site! (Note: will take time to load up due to deployment on heroku
        for free)
      </a>
    </div>
  </div>,
  <div>
    <video controls src={portfolio2021} type="video/mp4" />
    <div className="slide-text">
      <h1>My Portfolio from 2021</h1>
      <p>Built with HTML/SASS/React</p>
    </div>
  </div>,
  <div>
    <video controls src={catInsta} type="video/mp4" />
    <div className="slide-text">
      <h1>Instagram for Cats</h1>
      <p>
        Built to practice using react-router and React in general. Stylings done
        in Sass (css).
      </p>
    </div>
  </div>,
];

export default projects;
