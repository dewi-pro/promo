import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Services } from "./components/services";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    setLandingPageData(JsonData);
    const handleResize = () => {
      setViewportWidth(Math.min(window.innerWidth, 480));
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
    
  }, []);

  return (
    <div style={{ maxWidth: `${viewportWidth}px`, margin: '0 auto', boxSizing: 'border-box' }}>
      <Router>
      <Routes>

        <Route path="/" element={
           <div>
           <Navigation />
           <Header data={landingPageData.Header} />
           <Features data={landingPageData.Features} />
           </div>
        } />
        <Route path="/list-promo" element={<Gallery data={landingPageData.Gallery}/>} />
        <Route path="/map" element={<Services/>} />

      </Routes>
    </Router>
    </div>

  );
};

export default App;
