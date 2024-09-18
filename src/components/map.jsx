import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = '';

const mapContainerStyle = {
  height: '100vh', // Full viewport height
  width: '100%', // Full viewport width
};

// Center of the map and zoom level
const center = {
  lat: 51.505,
  lng: -0.09,
};

const GoogleMapComponent = () => {
    return (
      <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
