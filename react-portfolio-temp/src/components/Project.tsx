import React from "react";
import qriffic from '../assets/images/qriffic.png';
import shelter from '../assets/images/image.png';
import recipe_rover from '../assets/images/Recipe_Rover.jpg';
import download from '../assets/images/download.png';
import '../assets/styles/Project.scss';
import studyamp from '../assets/images/studyamp.png';
import medicheck from '../assets/images/gallery.jpg';


function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/A-D-I-T-C/medicheck" 
                       target="_blank" 
                       rel="noreferrer">
                        <div className="project-image-container">
                            <img src={medicheck} alt="Medicheck project thumbnail" />
                        </div>
                    </a>
                    <h2>MediCheck | HackEd 2025 Winner</h2>
                    <p>Developed an AI-driven healthcare assistant using a custom RAG-based LLM pipeline with LangChain, Hugging Face, and a Vector DB, improving medical response accuracy by 35%. Built a full-stack platform with Next.js and a Java backend, reducing appointment scheduling time by 40%. Optimized data retrieval with PostgreSQL and Redis, increasing system efficiency by 50%.</p>
                    <hr />

                </div>

                <div className="project">
                    <a href="https://github.com/NatRunners/StudyAmp" 
                       target="_blank" 
                       rel="noreferrer">
                        <div className="project-image-container">
                            <img src={studyamp} alt="StudyAmp project thumbnail" />
                        </div>
                    </a>
                    <h2>StudyAmp | NatHacks 2024 Winner</h2>
                    <p>Developed an AI-driven attention monitoring system using Muse 2 EEG, Brainflow, and Neural Networks, achieving 95% accuracy in real-time focus tracking. Integrated Gemini API and RAG LLM to boost focus retention by 30% and provide personalized summaries. Built an interactive Chart.js visualization platform, increasing engagement by 40%, and implemented a scalable FastAPI backend for multi-user EEG data processing.</p>
                    <hr />
                </div>
                <div className="project">
                    <a href="https://github.com/CodeToGive-2024-Team6/CodeToGive-2024" 
                       target="_blank" 
                       rel="noreferrer">
                        <div className="project-image-container">
                            <img src={shelter} alt="Shelter for women project thumbnail" />
                        </div>
                    </a>
                    <h2>Shelter for Women | Morgan Stanley CodeToGive Hackathon Winner</h2>
                    <p>Developed an intervention plan system to support women in need using React, Express.js, Firebase, Node.js, and CSS. Implemented goal-setting and real-time messaging, enhancing customization and communication.</p>
                    <hr />
                </div>
                
                <div className="project">
                    <a href="https://github.com/Kunal112003/rag-llm-webapp" 
                       target="_blank" 
                       rel="noreferrer">
                        <div className="project-image-container">
                            <img src={recipe_rover} alt="Recipe Rover project thumbnail" />
                        </div>
                    </a>
                    <h2>Recipe Rover</h2>
                    <p>Engineered a RAG LLM using OpenAI and Langchain, enabling the retrieval of information from over 100,000 cookbooks and recipes globally. Utilized Chroma DB, improving scalability to handle 10,000+ users and enabling rapid recipe retrieval.</p>
                    <hr />
                </div>

                <div className="project">
                    <a href="https://github.com/CMPUT301W23T13/QRiffic" 
                       target="_blank" 
                       rel="noreferrer">
                        <div className="project-image-container">
                            <img src={qriffic} alt="QRIFFIC project thumbnail" />
                        </div>
                    </a>
                    <h2>QRIFFIC</h2>
                    <p>Directed a team to create QRiffic, an Android app for gamified QR code collection. Achieved high QR code recognition accuracy and integrated Firebase and Google Maps APIs for real-time features.</p>
                    <hr />
                </div>

                <div className="project">
                    <a href="https://github.com/Kunal112003/Search-planning-AI-project" 
                       target="_blank" 
                       rel="noreferrer">
                        <div className="project-image-container">
                            <img src={download} alt="Search and Planning AI project thumbnail" />
                        </div>
                    </a>
                    <h2>Search and Planning AI Models</h2>
                    <p>Developed a search and planning AI model using Python and Java, enabling the efficient search of large datasets. Implemented a heuristic search algorithm, improving search efficiency by 30%.</p>
                    <hr />
                </div>
            </div>
        {/* // Update the resume section JSX */}
        <div className="resume-section">
            <h1>View My Resume</h1>
            <p>Download my resume to learn more about my experience and qualifications</p>
            <a href="/KunalRao_Resume.pdf" target="_blank" rel="noreferrer" className="resume-link">
                Download Resume
            </a>
        </div>
    </div>


    //resume download
    // 
    );
}

export default Project;