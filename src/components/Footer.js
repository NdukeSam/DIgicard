import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="card">
      <div className="Footer">
        <a href="https://twitter.com/samnduke" target="_blank"><TwitterIcon /></a> 
        <a href="https://www.facebook.com/diamond.sam.79/" target="_blank"><FacebookOutlinedIcon /></a> 
        <a href="https://www.instagram.com/ndukesam/" target="_blank"><InstagramIcon /></a> 
        <a href="https://github.com/NdukeSam" target="_blank"><GitHubIcon /></a> 
      </div>
    </div>
  );
}

export default Footer;
