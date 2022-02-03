import './App.css';
import ParallaxLoad from './components/parallax/parallax';
import Hero from './components/hero/Hero';
import './styles/app.scss'
import React, { useState, useEffect, useContext, useRef } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// var Scroll = require('react-scroll');
// var scroll = Scroll.animateScroll;


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { height, width } = useWindowDimensions();

  // A custom scroll container
  const ref = useRef(null);

  // Also support document.body / document.documentElement, and you don't need to set a ref passing to jsx
  // const ref = useRef(document.body);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <div className="App" >

      {/* <Element id="scene1"> */}
      <Hero width={width} height={height} />
      {/* </Element> */}
      <Element id="scene2">
        {(width > 769 && height > 800) && <ParallaxLoad scrollPosition={scrollPosition} width={width} height={height} />}
      </Element>
      {/* <Element id="scene3">
        <div style={{ height: '100vh' }} >3rd component</div>
      </Element>
      <Element id="scene4">
        <div style={{ height: '100vh', border: "1px solid black" }} >4rd component</div>
        <h1 style={{ position: 'absolute', color: 'black', zIndex: '1', bottom: '0' }} onClick={() => scroll.scrollToTop({
          duration: 1000,
        })}>Go To Top</h1>
      </Element> */}

    </div>
  );
}


export default App;
