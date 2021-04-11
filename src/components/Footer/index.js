import React from "react";
import './index.css';
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container d-inline">
        <div className="row px-5">
          <div className="col-12">
            <p className="font-weight-bold text-center">
              Roselle Burlasa &copy; Copyright 2021
            </p>
          </div>
          <div className="col-12 text-center">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;