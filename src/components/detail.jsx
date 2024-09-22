import React from "react";
import rectangle2 from "../image/Rectangle2.png";
import { Link } from "react-router-dom";
import footer from "../image/footer.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Detail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const data = state?.data;
console.log(data);
  const handleClick = (data) => {
    navigate("/map", { state: { data } });
  };

  return (
    <div>
      <header id="header">
        <div className="intro">
          <img src={state ? state.goTo :rectangle2} alt="banner" className="image_header" />
        </div>
        <div className="link">
          <Link
            to="/list-promo"
            style={{ color: "#9B9B9B", textDecoration: "none" }}
          >
            lihat promo lainnya
          </Link>
        </div>
      </header>

      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 ">
            {data
              ? data.Detail_Promo.map((d, i) => (
                  <div key={`${d.baru_landing.title}-${i}`}>
                    <p id="features" className="title">
                      {d.baru_landing.title}
                    </p>
                    <p id="features" className="subtitle">
                      {d.baru_landing.subtitle}
                    </p>
                    <div style={{ marginTop: "50px" }}></div>
                    {d.baru_landing.lines.map((line, index) => (
                      <p id="features" key={index} className="line">
                        {line}
                      </p>
                    ))}
                  </div>
                ))
              : props.data
              ? props.data.Detail_Promo.map((d, i) => (
                  <div key={`${d.baru_landing.title}-${i}`}>
                    <div style={{ marginTop: "5%" }}></div>

                    <p id="features" className="titles">
                      {d.baru_landing.title}
                    </p>
                    <p id="features" className="subtitles">
                      {d.baru_landing.subtitle}
                    </p>
                    <p id="features" className="area">
                      {d.baru_landing.area}
                    </p>
                    <div style={{ marginTop: "5%" }}></div>
                    {d.baru_landing.lines.map((line, index) => (
                      <p id="features" key={index} className="line">
                        {line}
                      </p>
                    ))}
                <div style={{ marginTop: "5%" }}></div>
                  </div>
                ))
              : "Loading..."}
          </div>
          <div className="image_link">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <p className="title">
                      LOKASI KLAIM VOUCHER
                      <span></span>
                    </p>
                    <p className="subtitle">
                      {" "}
                      Klaim voucher dapat dilakukan di:<span></span>
                    </p>
                    <div className="row">
                      {props.data
                        ? props.data.Maps.map((d, i) => (
                            <div
                              key={`${d.title}-${i}`}
                              className="col-xs-6 col-md-3 loc_background"
                            >
                              {" "}
                              <p className="map_title">{d.title}</p>
                              <div
                                onClick={() => handleClick(d.map)}
                                className="button_map"
                              ></div>
                            </div>
                          ))
                        : "Loading..."}
                    </div>
                    <img
                      src={footer}
                      alt=""
                      style={{
                        width: "100%",
                        height: "14%",
                        position:
                          "absolute" /* Position fixed to stick to the bottom */,
                        bottom:
                          "-15%" /* Align to the bottom of the viewport */,
                        left: "50%" /* Center horizontally */,
                        transform:
                          "translateX(-50%)" /* Adjust for horizontal centering */,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};