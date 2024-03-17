import React from 'react'
import './WorkExperience.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { SiReact } from 'react-icons/si';

const WorkExperience = () => {
  return (
    <>
    <div className="container work" id='experience'>
    <div className=" work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Self Learn
              </h4>
              <p>
               I have Learn MERN stack development and made som of th projects and now willing to join any IT company to gain more experience on real world projects
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SJN SERVICES
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management,Psd to Html
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Wordpress Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Freelancing on Fiver.com
              </h4>
              <p>
                Provided services of frontend development and CMS wordpress developer
              </p>
            </VerticalTimelineElement>
          
            </VerticalTimeline>
          </div>

    </div>
    </>
  )
}

export default WorkExperience
