import ParallaxLoad from './components/parallax/parallax';
import Hero from './components/hero/Hero';
import './styles/app.scss'
import React from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import { Element, animateScroll as scroll } from 'react-scroll'


function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App" >
      <Hero width={width} height={height} />
      <Element id="scene2">
        {(width > 769 && height > 800) && <ParallaxLoad  width={width} height={height} />}
      </Element>
      <Element id="scene3" >
        <div style={{ height: '100vh', fontSize: '2em', display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
          <h1>WIP :)</h1>
          <h1 style={{ color: 'red', fontSize: '1em' }} onClick={() => scroll.scrollToTop({
            duration: 1000,
          })}>Click me to return to top</h1></div>

      </Element>

    </div>
  );
}


export default App;
