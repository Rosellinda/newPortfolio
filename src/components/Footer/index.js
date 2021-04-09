import React from "react";
import './index.css';
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row justify-content-between text center">
          <div className="col-md-4 text-md-left">
            <p>
              Copyright &copy; 2019. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
            </p>
          </div>
          <div className="col-md-4 text-md-right">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;