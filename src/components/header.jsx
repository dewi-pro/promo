import React from "react";
import rectangle2 from "../image/Rectangle2.png"
import { Link } from 'react-router-dom';

export const Header = (props) => {

  return (
    <header id="header">
      <div className="intro">
      <img src={rectangle2} alt='banner' className="image_header"/>
      </div>
      <div className="link">
      <Link to="/list-promo" style={{ color: "#9B9B9B", textDecoration: 'none' }}>
      lihat promo lainnya
    </Link>
      </div>
    </header>
  );
};
