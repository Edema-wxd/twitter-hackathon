import React from "react";
import style from "./Privacy.module.css";
import priv from "../../assets/images/privacypic.png";
import pcheck from "../../assets/images/pcheck.svg";

function Privacy() {
  return (
    <div className={style.Privacy}>
      <div className={style.PrivTxt}>
        <h2>
          Privacy Policy and
          <br />
          <span>Terms</span>
        </h2>
        <p>Last updated on September 12, 2023</p>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className={style.PrivTBox}>
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h5>
            <span>Licensing Policy</span>
            <br />
            Here are terms of our Standard License:
          </h5>
          <div className={style.PrivTBTxt}>
            <img src={pcheck} alt="" />
            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className={style.PrivTBTxt}>
            <img src={pcheck} alt="" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <button>Read More</button>
        </div>
      </div>
      <div className={style.PrivImg}>
        <img src={priv} alt="" />
      </div>
    </div>
  );
}

export default Privacy;
