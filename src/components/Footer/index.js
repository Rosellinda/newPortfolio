import React from "react";
import './index.css';
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row justify-content-between text-center">
          <div className="col-12">
            <p className="text-center font-weight-bold">
              Roselle Burlasa &copy; Copyright 2021
            </p>
          </div>
          <div className="col-12 justify-content-center">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;