import React from "react";
import style from "./Confirm.module.css";
import { useNavigate } from "react-router-dom";
import congrats from "../../assets/images/congratulations.png";
import wink from "../../assets/images/wink.png";

function Confirm() {
  const navigate = useNavigate();
  return (
    <div className={style.Confirm}>
      <img src={congrats} alt="Congratulations" />
      <h3>Congratulations you have successfully Registered!</h3>
      <p>
        Yes, it was easy and you did it! check your mail box for next step
        <img src={wink} alt="" />
      </p>
      <button  onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Confirm;
