import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import kunal from '../assets/images/kunal.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          
          <img src={kunal} alt="Avatar" style={{ width: '220px', height: '250px', borderRadius: '50%' }}/>


          
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Kunal112003" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kunal-rao-0956b9262/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kunal Rao</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Kunal112003" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kunal-rao-0956b9262/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;