import React from "react";
import style from "./Hero.module.css";
import uncurve from "../../assets/images/uncurve.svg";
import boy from "../../assets/images/hero.png";
import bulb from "../../assets/images/bulb.png";

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div id="over" className={style.Hero}>
      <div className={style.HIno}>
        <p className={style.HIp}>Igniting a Revolution in HR Innovation</p>
        <img src={uncurve} alt="" />
      </div>
      <div className={style.HInfo}>
        <div className={style.HITitle}>
          <img src={bulb} alt="" />
          <h1>
            getlinked Tech Hackathon
            <span> 1.0</span>
          </h1>
        </div>
        <p>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button onClick={() => navigate("/register")}>Register</button>
        <div className={style.HICount}>
          <p>
            <span>00</span>H <span>00</span>M <span>00</span>S
          </p>
        </div>
      </div>
      <div className={style.HImg}>
        <img src={boy} alt="" />
      </div>
    </div>
  );
}

export default Hero;
