import { Image } from "./image";
import React from "react";
import rectangle2 from "../image/Rectangle2.jpg"
import rectangle4 from "../image/IMG_9480.png"
import { useNavigate } from "react-router-dom";

export const PromoList = (props) => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="intro">
      <img src={rectangle2} alt='banner' className="image_header" onClick={()=> navigate("/")}/>
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
                      goTo={()=> navigate("/", { state: {goTo: d } })}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
          <div style={{ marginTop: "8%" }}></div>

          <div className="list_img_promo"> 
          <img src={rectangle4} alt='banner' className="footer_img"/>

          </div>
    </div>
  );
};
