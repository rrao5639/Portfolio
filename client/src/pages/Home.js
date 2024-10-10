import React from "react";
import { useTheme } from "../components/themeContext";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import Fade from "react-reveal/Fade";

// Add this code here for platform detection
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const whatsappLink = isMobile
    ? "https://api.whatsapp.com/send?phone=+918744984557"
    : "https://web.whatsapp.com/send?phone=+918744984557";

  return (
    <>
      <div className="home-container" id="home" role="banner">
        <div className="theme-btn" onClick={handleTheme} aria-label="Toggle theme">
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React Native Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href={whatsappLink}
                rel="noreferrer"
                target="_blank"
                aria-label="Hire me via WhatsApp"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="your_name.pdf"
                aria-label="Download my resume"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
