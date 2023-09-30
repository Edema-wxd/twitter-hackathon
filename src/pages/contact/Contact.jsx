import React from "react";
import style from "./Contact.module.css";
import Pagechange from "../../animation/Pagechange";
import { useState, useEffect } from "react";
import Booting from "../../components/booting/Booting";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import x from "../../assets/images/X.svg";
import Nav from "../../components/nav/Nav";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: formData.email,
      phone_number: formData.phone,
      first_name: formData.fname,
      message: formData.message,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backend.getlinked.ai/hackathon/contact-form", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
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
          <Nav />
          <div className={style.Contact}>
            <div className={style.CInfo}>
              <h2>Get in touch</h2>
              <p>Contact Information</p>
              <p>27,Alara Street Yaba 100012 Lagos State</p>
              <p>Call Us : 07067981819</p>
              <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
              <div className="">
                <p>
                  <span>Share on</span>
                </p>
                <div className="">
                  <a href="/">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="/">
                    <img src={x} alt="X" />
                  </a>
                  <a href="/">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="/">
                    <img src={linkedin} alt="Linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.CSect}>
              <h3>
                <span>Questions or need assistance?</span>
                <br />
                <span>Let us know about it!</span>
              </h3>
              <form className={style.CForm} onSubmit={handleSubmit} action="">
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.fname}
                  name="name"
                  placeholder="First Name"
                />
                <input
                  type="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  placeholder="Phone number"
                />
                <input
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  id=""
                  placeholder="Mail"
                />{" "}
                <textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  id=""
                  placeholder="Message"
                  style={{ resize: "none" }}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </Pagechange>
      )}
    </>
  );
}

export default Contact;
