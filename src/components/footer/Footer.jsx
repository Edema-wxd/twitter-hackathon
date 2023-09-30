import React from "react";
import style from "./Footer.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import x from "../../assets/images/X.svg";
import phone from "../../assets/images/phone.svg";
import location from "../../assets/images/location.svg";

function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.FBody}>
        <div className={style.FBTxt}>
          <img src={logo} alt="" />
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className={style.FBTLink}>
            <p>Terms of Use</p>
            <hr />
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="">
          <div className={style.FBUse}>
            <h4>Useful Links</h4>
            <AnchorLink>Overview</AnchorLink>
            <AnchorLink>Timeline</AnchorLink>
            <AnchorLink>FAQs</AnchorLink>
            <Link>Register</Link>
            <div className={style.FBUEx}>
              <p>Follow us</p>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={x} alt="X" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                <img src={linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
          <div className={style.FBCont}>
            <h4>Contact us</h4>
            <div className="">
              <img src={phone} alt="" />
              <p>+2346707653444</p>
            </div>
            <div className="">
              <img src={location} alt="" />
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <footer className={style.FFoot}>
        All rights reserved. &copy; getlinked Ltd.
      </footer>
    </div>
  );
}

export default Footer;
