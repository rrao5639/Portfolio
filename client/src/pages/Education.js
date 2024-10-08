import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const educationData = [
  {
    date: "2017 - 2018",
    title: "Class 10th",
    subtitle: "NBBPS, Delhi",
  },
  {
    date: "2019 - 2020",
    title: "Class 12th",
    subtitle: "Sarvodaya Co-ed Vidyalaya, Delhi",
  },
  {
    date: "2021 - 2025",
    title: "B.Tech (CSE)",
    subtitle: "MAIT, Delhi",
  },
];

const Education = () => {
  return (
    <div className="education" id="Education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
      <hr />
      <VerticalTimeline>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={item.date}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};


export default Education;