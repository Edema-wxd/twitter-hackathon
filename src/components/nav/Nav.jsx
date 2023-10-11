import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import logo from "../../assets/images/logo.svg";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Nav(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  var location = props.location;
  var eskelebe;
  if (location !== "home") {
    eskelebe = (
      <>
        <Link to={"/"}>Timeline</Link>
        <Link to={"/"}>Overview</Link>
        <Link to={"/"}>FAQs</Link>
      </>
    );
  } else {
    eskelebe = (
      <>
        <AnchorLink href="#time">Timeline</AnchorLink>
        <AnchorLink href="#over">Overview</AnchorLink>
        <AnchorLink href="#faq">FAQs</AnchorLink>
      </>
    );
  }
  return (
    <div className={style.Nav}>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className={style.NLinks}>
        <div className={style.NLIn}>
          {eskelebe}
          <Link to="/contact">Contact</Link>
        </div>
        <div className={style.NLBut}>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
      {openMenu ? (
        <>
          <div className={style.tit}>
            <AiOutlineClose onClick={toggleMenu} />
            <div className={style.Nslinks}>
              {eskelebe}
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </div>
          <div className={style.grey}></div>
        </>
      ) : (
        <div onClick={toggleMenu} className={style.menubtn}>
          <BiMenu />
        </div>
      )}
    </div>
  );
}

Nav.defaultProps = {
  location: "",
};

export default Nav;
