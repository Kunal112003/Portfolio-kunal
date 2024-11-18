import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

interface TimelineItem {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[]; // Updated to reflect an array of strings
    skills: string[];
}

const timelineData: TimelineItem[] = [
    {
        title: "Software Developer Co-op",
        company: "Royal Bank of Canada (RBC)",
        location: "Calgary, AB",
        date: "Dec 2024 - Present",
        description: [
            "Develop and enhance CRM components using Python, SQL, and JavaScript.",
            "Design Wealth Management solutions leveraging Azure and DevOps practices.",
            "Automate workflows and ensure seamless deployment through Agile methodologies."
        ],
        skills: ["CRM", "Python", "SQL", "JavaScript", "Azure", "DevOps", "Agile"]
    },
    {
        title: "Software Engineer",
        company: "SPEAR",
        location: "Edmonton, AB",
        date: "Sep 2023 - Apr 2024",
        description: [
            "Sub-led Mars rover software for 90%+ autonomous navigation.",
            "Integrated SLAM with LiDAR and GPS, improving autonomy by 30%.",
            "Designed and tested embedded systems, reducing response time by 50%."
        ],
        skills: ["Autonomy", "SLAM", "LiDAR", "TensorFlow", "Embedded Systems", "DevOps"]
    },
    {
        title: "Software Developer",
        company: "Blueprint",
        location: "Edmonton, AB",
        date: "Feb 2023 - Aug 2023",
        description: [
            "Spearheaded web app development for 12 developers using MERN stack.",
            "Improved scalability by 40% and accelerated delivery timelines by 20% with Agile and AWS integration."
        ],
        skills: ["MERN", "MVC", "AWS", "Agile", "Scalability"]
    }
];

function Timeline() {
    return (
        <div className="timeline-container" id="history">
            <div className="items-container">
                <h1>Career History</h1>
                <VerticalTimeline>
                    {timelineData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            date={item.date}
                            iconStyle={{
                                background: "rgba(80, 0, 202, 0.8)",
                                color: "white",
                                boxShadow:
                                    "0 0 0 4px rgba(80, 0, 202, 0.4), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                            }}
                            // icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                            <p>

                            
                            <ul>
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            </p>
                            <div className="tags">
                                {item.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;
