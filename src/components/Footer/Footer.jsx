import React from "react";
import "./Footer.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircleIcon from '@mui/icons-material/Circle';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>
            <img
              src="https://pbs.twimg.com/profile_images/1453339438029869059/Mpk9QXje_400x400.jpg"
              alt="logo"
              style={{ height: "40px", width: "40px", display: "flex" }}
            />
             Fiverr<CircleIcon sx={{fontSize: "10px", color: "#1DBF73"}} />
          </span>
        </div>
        <div className="footer-content-right">
          <b>ABOUT</b>
          <br />
          Careers
          <br />
          Press & News
          <br />
          Partnerships
          <br />
          Privacy Policy
          <br />
          FAQs
          <br />
        </div>
        <div className="footer-content-middle">
          <b>SUPPORT</b>
          <br />
          Help & Support
          <br />
          Trust & Safety
          <br />
          Selling on Fiverr
          <br />
          Buying on Fiverr
          <br />
          Investor Relations
          <br />
        </div>
        <div className="footer-content-last">
          <b>subscribe to our newsletter</b>
          <br />
          monthly digest of the best fiverr tools and resources
          <br />
          <div
            style={{ marginTop: "10px", marginBottom: "10px", display: "flex" }}
          >
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              size="small"
            />
            <Button variant="contained">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="finalfooter">
        <div className="finalfooter-content">
          <CopyrightIcon />
          2022 Company, Inc All rights reserved.
        </div>
        <div className="finalfooter-content-img">
          <FacebookIcon className="smi" />
          <TwitterIcon className="smi" />
          <InstagramIcon className="smi" />
          <LinkedInIcon className="smi" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
