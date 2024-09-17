import React from "react";
import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon from react-icons

export const Navigation = (props) => {
  const handleBack = () => {
    window.location.href = "https://wa.me/62817768838"; // Replace with the appropriate WhatsApp link or phone number
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <FaArrowLeft style={styles.icon} onClick={handleBack}/>
          <a style={{fontSize:'21px', color:'black'}} href={handleBack}>
            Whatsapp
          </a>{" "}
        </div>
      </div>
    </nav>
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
