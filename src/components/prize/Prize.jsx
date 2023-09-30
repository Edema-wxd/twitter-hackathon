import React from "react";
import style from "./Prize.module.css";
import trophy from "../../assets/images/trophy.png";
import rewards from "../../assets/images/Rewards.png";
import LA from "../../assets/images/LA.png";
import LP from "../../assets/images/LP.png";
import WW from "../../assets/images/WW.png";
import whis from "../../assets/images/whis.png";
import viz from "../../assets/images/Viz.png";
import pay from "../../assets/images/Paybox.png";

function Prize() {
  return (
    <>
      <div className={style.Prize}>
        <div className={style.PrTxt}>
          <h2>
            Prizes and
            <br />
            <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className={style.PrImgs}>
          <div className="">
            <img src={trophy} alt="" />
          </div>
          <div className="">
            <img src={rewards} alt="" />
          </div>
        </div>
      </div>
      <div className={style.Part}>
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div className={style.PSpon}>
          <div className={style.PSImgrow}>
            <div className="">
              <img src={LA} alt="" />
            </div>
            <div className="">
              <img src={LP} alt="" />
            </div>
            <div className="">
              <img src={WW} alt="" />
            </div>
          </div>
          <div className={style.PSSeprow}>
            <div className={style.PSSep}></div>
            <div className={style.PSSep}></div>
            <div className={style.PSSep}></div>
          </div>
          <div className={style.PSImgrow}>
            <div className="">
              <img src={whis} alt="" />
            </div>
            <div className="">
              <img src={pay} alt="" />
            </div>
            <div className="">
              <img src={viz} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prize;
