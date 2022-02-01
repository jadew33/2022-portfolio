import './App.css';
import ParallaxLoad from './components/parallax/parallax';
import Hero from './components/hero/Hero';
import './styles/app.scss'
import React, { useState, useEffect } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { height, width } = useWindowDimensions();
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
    <div className="App">
      <Hero />
      {/* <div style={{ position: 'fixed', fontWeight: 'bold' }}>
        scroll: {scrollPosition} height: {height} width: {width}
      </div> */}
      {(width > 769 && height > 800) && <ParallaxLoad scrollPosition={scrollPosition} width={width} height={height} />}
    </div>
  );
}

export default App;
