import React from 'react';
import { Link } from "react-router-dom";
import * as ImIcons from "react-icons/im";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import './index.css';

const SocialIcons = () => {
    return (
      <>
        <span className="d-inline">
          <Link to="/" className="icon">
            <ImIcons.ImFacebook />
          </Link>
        </span>
        <span className="d-inline">
          <Link to="/" className="icon">
            <GrIcons.GrLinkedin />
          </Link>
        </span>
        <span className="d-inline">
          <Link to="/" className="icon">
            <SiIcons.SiGmail />
          </Link>
        </span>
        <span className="d-inline">
          <Link to="/" className="icon">
            <AiIcons.AiFillGithub />
          </Link>
        </span>
        <span className="d-inline">
          <Link to="/" className="icon">
            <FaIcons.FaFreeCodeCamp />
          </Link>
        </span>
      </>
    );
  };
  
  export default SocialIcons;