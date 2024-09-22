import React from "react";
import { useLocation } from 'react-router-dom';
export const Map = () => {

  const location = useLocation();
  const { state } = location;
  const data = state?.data;
  
  return (
    <div>
      <div className="container">
      <iframe
      title="map"
        src={data}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>


      </div>
    </div>
  );
};