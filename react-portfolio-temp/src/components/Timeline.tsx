import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)', borderRadius: '50%' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            // Make the edges rounded
            
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'blue', fontSize: '24px' }}>Software Developer</h3>
            {/* company name */}
            <h4 className="vertical-timeline-element-subtitle">UofA BluePrints</h4>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Full-stack Web Development, Project Management, Agile Developement
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'blue', fontSize: '24px' }}>Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">SPEAR</h4>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Backend Development, Machine Learning, Computer Vision, Automation, AI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'blue', fontSize: '24px' }}>Software Developer Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle">Royal Bank of Canada (RBC)</h4>
            <h4 className="vertical-timeline-element-subtitle">Calgary, AB </h4>
            <p>
              Full-stack Development, CRM Development, Agile, Scrum, DevOps
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;