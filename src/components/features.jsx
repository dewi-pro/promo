import React from "react";
import voucher from "../image/footer.png"
import '../css/promo_head.css'

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <div style={{marginTop:'50px'}}></div>
          <p id="features" className="title">Baru Landing Langsung Take Off</p>
          <p id="features" className="title">Traveling Lagi!</p>
          <p id="features" className="subtitle">You can put some opening promo copyright in 2 sentences here. You can put some opening promo copyright in 2 sentences here.</p>
          <div style={{marginTop:'50px'}}></div>

          <p id="features" className="line">1. points box for T&C</p>
          <p id="features" className="line">2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p id="features" className="line">3. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p id="features" className="line">4. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p id="features" className="line">5. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
        </div>
        {/* <img src={voucher} alt="" style={{width: '480px',
                                            height: '771px',
                                            top: '707px',}} />  */}
        <div className="image_link">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              <p className="title">
                  LOKASI KLAIM VOUCHER                   
                  <span></span>
                  </p>
                  <p className="subtitle"> Klaim voucher dapat dilakukan di:<span></span></p>
                  <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 loc_background" >
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <p className="map_title">{d.title}</p>
                  <a href={d.map} className="button_map" >
                  </a>
                </div>
              ))
            : "Loading..."}
                </div>
                <img src={voucher} alt="" style={{
                        width: '430px',
                        height: '88px',
                        position: 'absolute', /* Position fixed to stick to the bottom */
                        bottom: '-15%', /* Align to the bottom of the viewport */
                        left: '50%', /* Center horizontally */
                        transform: 'translateX(-50%)' /* Adjust for horizontal centering */
                }} />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div> */}
      </div>
    </div>
  );
};
