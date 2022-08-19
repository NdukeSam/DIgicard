import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import id from "../images/Snapchat.jpg";

function Info() {
  return (
    <div className="card">
      <div className="img--container">
        <img className="img" src={id} alt="ID " />
      </div>
      <div className="info--text">
        <h1>Nduke-Abasi Sam</h1>
        <p className="info--color">Frontend Developer</p>
        <span>github.com/NdukeSam</span>
        <div className="btn">
          <button className="btn--email"> <EmailIcon/> <a href="https://github.com/NdukeSam" target="_blank" >Email</a></button>
          <button className="btn--linkedin" ><LinkedInIcon/> <a href="https://www.linkedin.com/in/nduke-sam-50025b1a1/" target="_blank" >LinkedIn</a></button>
        </div>
      </div>
    </div>
  );
}

export default Info;
