import React from "react";
import style from "./Intro.module.css";
import rules from "../../assets/images/rules.png";
import idea from "../../assets/images/idea.png";
import judging from "../../assets/images/judging.png";

function Intro() {
  return (
    <div className={style.Intro}>
      <div className={style.ICard}>
        <img src={idea} alt="" />
        <div className={style.ICTxt}>
          <h3>
            Introduction to getlinked
            <br />
            <span>tech Hackathon 1.0</span>
          </h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className={style.ICard}>
        <div className={style.ICTxt}>
          <h3>
            Rules and
            <br />
            <span>Guidelines</span>
          </h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <img src={rules} alt="" />
      </div>
      <div className={style.IJudge}>
        <img src={judging} alt="" />
        <div className={style.IJSect}>
          <h3>
            Judging Criteria
            <br />
            <span>Key attributes</span>
          </h3>
          <p>
            <span>Innovation and Creativity:</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p>
            <span>Functionality:</span> Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p>
            <span>Impact and Relevance:</span> Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </p>
          <p>
            <span>Technical Complexity:</span> Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </p>

          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
