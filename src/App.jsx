import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Detail } from "./components/detail";
import { PromoList } from "./components/promoList";
import { Map } from "./components/map";
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
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div
      style={{
        maxWidth: `${viewportWidth}px`,
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navigation title="Whatsapp" />
                <Detail data={landingPageData.Detail} />
              </div>
            }
          />
          <Route
            path="/list-promo"
            element={
              <div>
                <Navigation title="Promo" />
                <PromoList data={landingPageData.ListPromo} />{" "}
              </div>
            }
          />
          <Route
            path="/map"
            element={
              <div>
                <Navigation title="Lokasi" />
                <Map />{" "}
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
