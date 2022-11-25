import React from "react";
import "./footer.scss";
import logo from "../logosvg/logo.png";
import {FaFacebookF,FaLinkedinIn,FaBasketballBall} from "react-icons/fa";
import{BsInstagram,BsTwitter}from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <div className="footer2">
        <div className="wrapper">
          <div className="row align-items-center">
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="logo">
                <img src={logo} />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <ul className="social-share d-flex justfy-content-center p-0 m-0">
              
<li>
<FaFacebookF/>
</li>
<li>
  <FaLinkedinIn/>

</li>
<li>
<BsInstagram/>
</li>
<li>
<BsTwitter/>
</li>
<li>
<FaBasketballBall/>
</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="inner text-lg-right text-center mt_md--20 mt_sm--20">
                        <div class="text">
                            <p>Copyright © 2022 All rights reserved by Rainbow-Themes. Built with love in Bangladesh All rights reserved.</p>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
