import React, { useEffect } from 'react';

import axios from 'axios';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import footer from '../image/footer.png';
import rectangle2 from '../image/Rectangle2.jpg';

const recordVisitor = async () => {
  // Sample visitor data
  const visitorInfo = {
    browser: navigator.userAgent, // You can use the browser's user-agent string
    device: 'desktop', // Or use a device detection library for detailed info
    ip_address_v4: '192.168.1.1', // You can get this from your server-side code
    ip_address_v6: '', // Optionally, you can implement logic to get an IPv6 address
    operating_system: navigator.platform, // This will give OS info
    page_url: window.location.href, // Current URL of the page
    referrer: document.referrer || 'Direct Access', // The referring URL
    session_id: localStorage.getItem('session-id') || 'session-id', // Session ID
    site: window.location.hostname, // Current site domain
    token: localStorage.getItem('auth-token') || '', // Optional JWT token for authorization
    user_agent: navigator.userAgent, // Browser user agent
  };

  try {
    const response = await axios.post(
      'https://site-api.myantavaya.com/v1/site/site-visitor?api_key=89100546-c57e-43bb-958a-af2e0e286325', 
      visitorInfo, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
    console.log('Visitor data recorded:', response.data, visitorInfo);
  } catch (error) {
    console.error('Error recording visitor data:', error);
  }
};

export const Detail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const promo = state?.goTo;

  
    // Call the recordVisitor function when the component mounts
    useEffect(() => {
      recordVisitor();
    }, []);
  
  const handleClick = (data) => {
    navigate("/map", { state: { data } });
  };

  return (
    <div>
      <header id="header">
        <div className="intro">
          <img
            src={promo ? promo.largeImage : rectangle2}
            alt="banner"
            className="image_header"
          />
        </div>
        <div className="link">
          <Link
            to="/list-promo"
            style={{ color: "#bb3539", textDecoration: "none", fontWeight:"bold",  fontFamily: "Poppins"}}>
            lihat promo lainnya
          </Link>
        </div>
      </header>
      {/* <div className="coupon">
  <div className="container">
    <h3>Company Logo</h3>
  </div>
  <div className="container" style={{backgroundColor:"white"}}>
  <img
            src={promo ? promo.largeImage : rectangle2}
            alt="banner"
            className="image_header"
          />
    <h2><b>20% OFF YOUR PURCHASE</b></h2> 
    <p>Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum.</p>
    <div className="circle1" ></div>
    <div className="circle2" ></div>
  </div>
  
  <div className="container">
    <p>Use Promo Code: <span className="promo">BOH232</span></p>
    <p className="expire">Expires: Jan 03, 2021</p>
  </div>
</div> */}
      <div id="detailPromos" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 ">
            {promo ? (
              <div>
                <div style={{ marginTop: "5%" }}></div>
                <p id="detailPromos" className="titles">
                  {promo.title}
                </p>
                <p id="detailPromos" className="subtitles">
                  {promo.subtitle}
                </p>
                <p id="detailPromos" className="area">
                  {promo.area}
                </p>
                {promo.lines.map((line, index) => (
                  <p id="detailPromos" key={index} className="line">
                    {line}
                  </p>
                ))}
                <div style={{ marginTop: "50px" }}></div>
              </div>
            ) : props.data ? (
              props.data.Detail_Promo.map((d, i) => (
                <div key={`${d.baru_landing.title}-${i}`}>
                  <div style={{ marginTop: "5%" }}></div>
                  <p id="detailPromos" className="titles">
                    {d.baru_landing.title}
                  </p>
                  <p id="detailPromos" className="subtitles">
                    {d.baru_landing.subtitle}
                  </p>
                  <p id="detailPromos" className="area">
                    {d.baru_landing.area}
                  </p>
                  <div style={{ marginTop: "5%" }}></div>
                  {d.baru_landing.lines.map((line, index) => (
                    <p id="detailPromos" key={index} className="line">
                      {line}
                    </p>
                  ))}
                  <div style={{ marginTop: "5%" }}></div>
                </div>
              ))
            ) : (
              "Loading..."
            )}
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
                          "absolute",
                        bottom:
                          "-15%",
                        left: "50%" ,
                        transform:
                          "translateX(-50%)",
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
