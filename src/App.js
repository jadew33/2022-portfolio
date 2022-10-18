import React from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import "./styles/app.scss";
import { Element } from "react-scroll";

import ParallaxLoad from "./components/parallax/parallax";
import Hero from "./components/hero/Hero";
import Slideshow from "./components/parallax/slideshow";
import Carousel from "./components/carousel/carousel";
import Contact from "./components/contact/contact";

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <Hero />
      <Element id="scene2">
        {width > 900 && height > 700 ? <ParallaxLoad /> : <Slideshow />}
      </Element>
      <Element id="scene3">
        <Carousel />
      </Element>
      <Element id="scene4">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
