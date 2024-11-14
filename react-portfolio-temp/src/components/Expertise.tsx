import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "Python",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook",
    "ROS",
    "OpenCV",
    "Hugging Face",
];

const labelsFourth = [
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "CI/CD",
    "Serverless",
    "CloudFormation",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
            <div className="skill">
                <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                <h3>Software Development</h3>
                <p>Designed and implemented software solutions across various domains. Proficient in multiple programming languages and development methodologies, ensuring high-quality and maintainable code.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    {['Python', 'Java', 'C++', 'C#', 'Ruby', 'Agile', 'Scrum'].map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            <div className="skill">
                <FontAwesomeIcon icon={faCode} size="3x"/>
                <h3>Full-Stack Web/Mobile Development</h3>
                <p>Developed and maintained web and mobile applications using modern frameworks and libraries. Experienced in both front-end and back-end development, ensuring seamless integration and performance.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    {['React', 'Node.js', 'Express.js', 'Firebase', 'CSS', 'Android Studio', 'Java', 'XML'].map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Machine Learning & AI</h3>
                    <p>Engineered AI models to enhance decision-making processes. Developed scalable solutions for data analysis and prediction, utilizing advanced machine learning techniques and frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>Designed and implemented data pipelines and storage solutions to handle large-scale data processing and analysis. Proficient in various database technologies and data warehousing solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {['Python', 'SQL', 'NoSQL', 'BigQuery', 'ETL','Firebase', 'MongoDB','GraphQL'].map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Computing</h3>
                    <p>Architected and managed scalable, secure, and cost-effective cloud infrastructure solutions. Proficient in various cloud platforms and services, ensuring high availability and performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;