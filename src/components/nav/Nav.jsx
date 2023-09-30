import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import logo from "../../assets/images/logo.svg";

function Nav(props) {
  var location = props.location;
  return (
    <div className={style.Nav}>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className={style.NLinks}>
        <div className={style.NLIn}>
          {location !== "home" ? (
            <>
              <Link to={"/"}>Timeline</Link>
              <Link to={"/"}>Overview</Link>
              <Link to={"/"}>FAQs</Link>
            </>
          ) : (
            <>
              <AnchorLink href="#time">Timeline</AnchorLink>
              <AnchorLink href="#over">Overview</AnchorLink>
              <AnchorLink href="#faq">FAQs</AnchorLink>
            </>
          )}
          <Link to="/contact">Contact</Link>
        </div>
        <div className={style.NLBut}>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Nav.defaultProps = {
  location: "",
};

export default Nav;
