import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import img2 from "../assets/images/img2.png";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true); // Start loading
    try {
      const res = await axios.post("http://localhost:8080/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      // Validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <div className="card1">
            <img src={img2} alt="Contact illustration" className="image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="card2 d-flex card border-0 px-4 py-5">
            <h6>
              Contact With
              <a href="https://www.linkedin.com/in/rahul-sagar-910a332a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <BsLinkedin color="blue" size={30} className="ms-2" />
              </a>
              <a href="https://github.com/Rahulrs7" target="_blank" rel="noopener noreferrer">
                <BsGithub color="black" size={30} className="ms-2" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100025757291599" target="_blank" rel="noopener noreferrer">
                <BsFacebook color="blue" size={30} className="ms-2" />
              </a>
              <a href="https://www.instagram.com/rahul_sr.24" target="_blank" rel="noopener noreferrer">
                <BsInstagram color="black" size={30} className="ms-2" />
              </a>
            </h6>

            <div className="row px-3 mb-4">
              <div className="line" />
              <small className="or text-center">OR</small>
              <div className="line" />
            </div>

            <div className="row px-3">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
              />
            </div>
            <div className="row px-3">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
            </div>
            <div className="row px-3">
              <textarea
                name="msg"
                placeholder="Write your message"
                className="mb-3"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                aria-label="Message"
              />
            </div>
            <div className="row px-3">
              <button className="button" onClick={handleSubmit} disabled={loading}>
                {loading ? "Sending..." : "SEND MESSAGE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
