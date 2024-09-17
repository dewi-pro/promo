import { Image } from "./image";
import React from "react";
import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon from react-icons
import rectangle2 from "../image/Rectangle2.png"
import { useNavigate } from "react-router-dom";
import rectangle4 from "../image/IMG_9480.png"

export const Gallery = (props) => {
  const navigation = useNavigate()

  const handleBack = () => {
    navigation('/')
  };

  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <FaArrowLeft style={styles.icon} onClick={handleBack}/>
          <a style={{fontSize:'21px', color:'black'}} href={handleBack}>
            List Promo
          </a>{" "}
        </div>
      </div>
    </nav>

    <div className="intro">
      <img src={rectangle2} alt='banner' className="image_header"/>
      </div>
      <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      smallImage={d.largeImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
          <div className="list_img_promo"> 
          <img src={rectangle4} alt='banner' className="footer_img"/>

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
