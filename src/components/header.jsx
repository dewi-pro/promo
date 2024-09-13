import React from "react";
import '../css/promo_head.css'
import rectangle2 from "../image/Rectangle2.png"

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
      <img src={rectangle2} alt='banner' className="image_header"/>
      </div>
      <div className="link">
      <a href="#" style={{color:"#9B9B9B"}}>lihat promo lainnya</a>
      </div>
    </header>
  );
};
