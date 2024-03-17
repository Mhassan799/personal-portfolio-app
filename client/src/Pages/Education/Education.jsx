import React from 'react'
import './Education.css'
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { MdSchool } from 'react-icons/md'


const Education = () => {
  return (
    <>
    <div className="container education" id="education">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <VerticalTimeline>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Govt. College Formen Nazimabad Karachi
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BSCS</h3>
            <h4 className="vertical-timeline-element-subtitle">
              FUUAST Karachi
            </h4>
          </VerticalTimelineElement>
          </VerticalTimeline>

    </div>
    </>
  )
}

export default Education
