
import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.amazon.in/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://clgonline.in//static/all_collages/img/chaitanya-institute-of-technology-and-science-cits-warangal.jpg"
              alt="Founder"
            />
            <Typography>DEVELOPER TEAM</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit WEBSITES
            </Button>
            <span>
              Customers get many benefits via online shopping this helps e-commerce companies to build long-lasting and profitable relationships with their customers. For making a strong relationship with these users it is very important to focus on the customer as a whole and make sense of a flood of real-time information that goes well beyond demographics or shopping behavior.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">E-COMMERCE</Typography>
            <span>MERN STACK PROJECT</span>
            <span>MERN stands for MongoDB, Express, React, Node. With these technologies that make up the stack.</span>
            <br />
            <span>MongoDB - document database
              Express(.js) - Node.js web framework
              React(.js) - a client-side JavaScript framework
              Node(.js) – NODE.js is a JavaScript-based web server</span>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', margin:'10px' }}>
              <a href="https://www.instagram.com/mdintezar123/" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
              <a href="https://www.linkedin.com/in/md-intezar-alam-92814b226/" target="blank">
                <LinkedInIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;