import React from "react";

import mock07 from '../assets/images/mock07.png';
import map from '../assets/images/map_dijkstra.png';


import qriffic from '../assets/images/qriffic.png';
import shelter from '../assets/images/image.png';
import recipe_rover from '../assets/images/Recipe_Rover.jpg';
// import qriffic_vid from '../assets/images/qriffic_vid.mp4';
import download from '../assets/images/download.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/CodeToGive-2024-Team6/CodeToGive-2024" target="_blank" rel="noreferrer"><img src={shelter} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>Shelter for women</h2></a>
                <p>Developed an intervention plan system to support women in need using React, Express.js, Firebase, Node.js, and CSS. Implemented goal-setting and real-time messaging, enhancing customization and communication.</p>
                <hr />
            </div>
            
            <div className="project">
                <a href="https://github.com/Kunal112003/rag-llm-webapp" target="_blank" rel="noreferrer"><img src={recipe_rover} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>Recipe Rover</h2></a>
                <p>Engineered a RAG LLM using OpenAI and Langchain, enabling the retrieval of information from over 100,000 cookbooks and recipes globally. Utilized Chroma DB, improving scalability to handle 10,000+ users and enabling rapid recipe retrieval. Tech stack: Python, React, Flask, LangChain, ChromaDB, OpenAI.</p>
                <hr />
            </div>
            <div className="project">
                <a href="https://github.com/CMPUT301W23T13/QRiffic" target="_blank" rel="noreferrer"><img src={qriffic} className="zoom" alt="thumbnail" width="60%" height="50%"/></a>
                <a><h2>QRIFFIC</h2></a>
                <p>Directed a team to create QRiffic, an Android app for gamified QR code collection. Achieved high QR code recognition accuracy and integrated Firebase and Google Maps APIs for real-time features. Tech stack: Android Studio, Java, XML, Firebase, Google Maps API.</p>
                <hr />
            </div>
            <div className="project">
                <a href="https://github.com/Kunal112003/Search-planning-AI-project" target="_blank" rel="noreferrer"><img src={download} className="zoom" alt="thumbnail" width="100%"/></a>
                <a ><h2>Seach and Planning AI models</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
                <hr />
            </div>
            {/* 
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;