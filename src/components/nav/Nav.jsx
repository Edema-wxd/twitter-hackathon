import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import logo from "../../assets/images/logo.svg";

function Nav() {
  return (
    <div className={style.Nav}>
      <img src={logo} alt="" />
      <div className={style.NLinks}>
        <div className={style.NLIn}>
          <AnchorLink>Timeline</AnchorLink>
          <AnchorLink>Overview</AnchorLink>
          <AnchorLink>FAQs</AnchorLink>
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

export default Nav;
