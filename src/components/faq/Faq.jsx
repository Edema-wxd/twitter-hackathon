import React from "react";
import style from "./Faq.module.css";
import faq from "../../assets/images/faq.png";
import plus from "../../assets/images/plus.svg";

function Faq() {
  return (
    <div id="faq" className={style.Faq}>
      <div className={style.FTxt}>
        <h2>
          Frequently Ask
          <br />
          <span>Question</span>
        </h2>
        <p>
          We got answers to the questions that you might want to ask about
          <span> getlinked Hackathon 1.0</span>
        </p>
        <div className={style.FTQuest}>
          <div className={style.FTQCard}>
            <p>Can I work on a project I started before the hackathon?</p>
            <img src={plus} alt="" />
          </div>
          <div className={style.FTQCard}>
            <p>What happens if I need help during the hackathon?</p>
            <img src={plus} alt="" />
          </div>
          <div className={style.FTQCard}>
            <p>What happens if I don't have an idea for a project?</p>
            <img src={plus} alt="" />
          </div>
          <div className={style.FTQCard}>
            <p>Can I join a team or do I have to come with one?</p>
            <img src={plus} alt="" />
          </div>
          <div className={style.FTQCard}>
            <p>What happens after the hackathon ends</p>
            <img src={plus} alt="" />
          </div>
          <div className={style.FTQCard}>
            <p>Can I work on a project I started before the hackathon?</p>
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
      <div className={style.FImg}>
        <img src={faq} alt="" />
      </div>
    </div>
  );
}

export default Faq;
