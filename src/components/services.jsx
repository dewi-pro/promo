import React from "react";
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon from react-icons
import { useNavigate } from 'react-router-dom';

export const Services = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const data = state?.data;
  
  return (
    <div>
      <nav id="services" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <FaArrowLeft style={styles.icon} onClick={() => navigate(-1)}/>
          <a style={{fontSize:'21px', color:'black'}} href={navigate(-1)}>
            Lokasi
          </a>{" "}
        </div>
      </div>
    </nav>
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
const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#25D366', // WhatsApp green color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px 0', // Optional margin for spacing
  },
  icon: {
    marginRight: '8px', // Space between the icon and text
    color: 'black',
    cursor: 'pointer' /* Change cursor to pointer on hover */
  },
};