import React from "react";
import style from "./Register.module.css";
import Pagechange from "../../animation/Pagechange";
import { useState, useEffect } from "react";
import Booting from "../../components/booting/Booting";
import move from "../../assets/images/walk.png";
import register from "../../assets/images/register.png";
import Nav from "../../components/nav/Nav";

function Register() {
  const [loading, setLoading] = useState(false);
  const [catitem, setCatitem] = useState([]);
  const fetchCategories = () => {
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatitem(data);
      });
  };
  // const [formData, setFormData] = useState({
  //   groupName: "",
  //   category: "",
  //   phone: "",
  //   email: "",
  //   topic: "",
  //   size: "",
  //   isChecked: false,
  // });
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };
  const [groupName, setGroupName] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [size, setSize] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [btnDisabled, setbtnDisabled] = useState(true);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleGNChange = (e) => {
    setGroupName(e.target.value);
  };
  const handleCatChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    if (email === "") {
      setbtnDisabled(true);
    } else if (email !== "" && email.trim().length <= 7) {
      setbtnDisabled(true);
    }
    setEmail(e.target.value);
  };
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    fetchCategories();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      phone_number: phone,
      team_name: groupName,
      group_size: size,
      project_topic: topic,
      category: category,
      privacy_poclicy_accepted: isChecked,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backend.getlinked.ai/hackathon/registration", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {loading ? (
        <Booting />
      ) : (
        <Pagechange>
          <Nav />
          <div className={style.Register}>
            <img src={register} alt="" />
            <div className={style.RSect}>
              <h2>Register</h2>
              <div className={style.RSMove}>
                <p>Be part of this movement!</p>
                <img src={move} alt="Walking" />
              </div>
              <h3>CREATE YOUR ACCOUNT</h3>
              <form className={style.RSForm} onSubmit={handleSubmit}>
                <div className={style.RSFInput}>
                  <div className={style.RSFICard}>
                    <label htmlFor="team">Team's Name</label>
                    <input
                      name="team"
                      required
                      type="text"
                      placeholder="Enter the name of your group"
                      value={groupName}
                      onChange={handleGNChange}
                    />
                  </div>
                  <div className={style.RSFICard}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className={style.RSFICard}>
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className={style.RSFICard}>
                    <label htmlFor="topic">Project Topic</label>
                    <input
                      required
                      name="topic"
                      type="text"
                      value={topic}
                      onChange={handleTopicChange}
                      placeholder="What is your group project topic"
                    />
                  </div>
                </div>
                <div className={style.RSFDrop}>
                  <div className={style.RSFDCard}>
                    <label htmlFor="category">Category</label>
                    <select
                      required
                      value={category}
                      onChange={handleCatChange}
                      name="category"
                      id=""
                      placeholder="Select your category"
                    >
                      {catitem.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className={style.RSFDCard}>
                    <label htmlFor="size">Group Size</label>
                    <input
                      type="text"
                      value={size}
                      required
                      onChange={handleSizeChange}
                      name="size"
                      id=""
                      placeholder="Select your Group Size"
                    />
                  </div>
                </div>
                <p className={style.RSFReview}>
                  Please review your registration details before submitting
                </p>
                <label className={style.RSFTnc} htmlFor="tnc">
                  <input
                    required
                    type="checkbox"
                    name="tnc"
                    id=""
                    checked={isChecked}
                    onChange={handleCheck}
                  />
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={btnDisabled}
                  className={style.btn80}
                  type="submit"
                >
                  <span>Register Now</span>
                </button>
              </form>
            </div>
          </div>
        </Pagechange>
      )}
    </>
  );
}

export default Register;
