import React from 'react';
import './About.css';
import img3 from '../assets/images/img3.png';

const About = () => {
  return (
    <section className='about-container' id='About'>
      <div className='row'>
        <div className='col-md-6 about-img'>
          <img src={img3} alt="Rahul" loading="lazy" /> {/* Added lazy loading */}
        </div>
        <div className='col-md-6 about-content'>
          <h1>About Me</h1>
          <p>
            Hello! I’m Rahul, a passionate computer science student with a strong focus on web development. I specialize in Java and the MERN stack, which enables me to build dynamic and user-friendly web applications.
            <br/><br/>
            My journey in technology has been fueled by a curiosity for innovative solutions and a commitment to continuous learning. Whether it’s through personal projects or collaborative efforts, I thrive on tackling challenges and enhancing my skills.
            <br/><br/>
            I invite you to explore my portfolio to see my work and the projects that inspire me. Let’s connect and explore the possibilities of technology together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
