import Booting from "../../components/booting/Booting";
import Pagechange from "../../animation/Pagechange";
import { useState, useEffect } from "react";
import style from "./Landing.module.css";
import Hero from "../../components/hero/Hero";
import Faq from "../../components/faq/Faq";
import Intro from "../../components/intro/Intro";
import Time from "../../components/time/Time";
import Prize from "../../components/prize/Prize";
import Privacy from "../../components/privacy/Privacy";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

function Landing() {
  const [loading, setLoading] = useState(false);
  // add condtional to make sure this doesnt happen if the person comes back to the page
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Booting />
      ) : (
        <Pagechange>
          <Nav location="home" />
          <div className={style.Landing}>
            <Hero />
            <Intro />
            <Faq />
            <Time />
            <Prize />
            <Privacy />
          </div>
          <Footer />
        </Pagechange>
      )}
    </>
  );
}

export default Landing;
