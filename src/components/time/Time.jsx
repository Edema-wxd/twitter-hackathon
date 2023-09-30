import React from "react";
import style from "./Time.module.css";

function Time() {
  return (
    <div className={style.Time}>
      <h2>Timeline</h2>
      <p>
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <div className="">
        <div className="">
          <h4>Hackaton Announcement</h4>
          <p>
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
          <h4>November 18, 2023</h4>
        </div>
        <div className="">
          <h4>Teams Registration begins</h4>
          <p>
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
          <h4>November 18, 2023</h4>
        </div>
        <div className="">
          <h4>Teams Registration ends</h4>
          <p>Interested Participants are no longer Allowed to register</p>
          <h4>November 18, 2023</h4>
        </div>
        <div className="">
          <h4></h4>
          <p></p>
          <h4></h4>
        </div>
        <div className="">
          <h4></h4>
          <p></p>
          <h4></h4>
        </div>
        <div className="">
          <h4></h4>
          <p></p>
          <h4></h4>
        </div>
      </div>
    </div>
  );
}

export default Time;
