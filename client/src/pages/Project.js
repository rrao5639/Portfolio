import React from "react";
import "./Project.css";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";

const projectsData = [
  {
    title: "Shows Reviewing",
    imgSrc: img5,
    badges: ["Node.js", "Express.js", "React"],
    link: "https://box-office-react.vercel.app/",
  },
  {
    title: "Techinfoyt Coding App",
    imgSrc: img4,
    badges: ["React Native", "iOS / Android"],
    link: "https://tictactoe-game-gamma.vercel.app/",
  },
  // Additional projects can be added here...
];

const Projects = () => {
  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        In my journey as a web developer, I’ve created several exciting projects...
      </p>
      <div className="row" id="ads">
        {projectsData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">{project.title}</span>
                <img className="pro1" src={project.imgSrc} alt={project.title} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                {project.badges.map((badge, idx) => (
                  <span className="card-detail-badge" key={idx}>{badge}</span>
                ))}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">{project.title}</h5>
                </div>
                <a
                  className="ad-btn"
                  href={project.link}
                  aria-label={`View ${project.title} Project`}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
