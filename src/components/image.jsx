import React from "react";

export const Image = ({ title, largeImage, smallImage, goTo }) => {
  return (
    <div className="portfolio-item">
      {/* <div className="hover-bg">
        {" "} */}
      <a
        href={"#"}
        title={title}
        data-lightbox-gallery="gallery1"
        onClick={(e) => {
          e.preventDefault(); // Prevent the default anchor behavior
          goTo(); // Call the goTo function
        }}
      >
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={smallImage} className="img-responsive" alt={title} />{" "}
      </a>{" "}
      {/* </div> */}
    </div>
  );
};
