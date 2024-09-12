import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

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
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
