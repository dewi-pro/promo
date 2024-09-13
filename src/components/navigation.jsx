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
          {/* <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button> */}
          <FaArrowLeft style={styles.icon} onClick={handleBack}/>
          <a style={{fontSize:'21px', color:'black'}}>
            whatsapp
          </a>{" "}
        </div>

        {/* <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div> */}
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
  },
};
