import React from 'react';
import { Link } from "react-router-dom";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import './index.css';

const SocialIcons = () => {
    return (
      <>
        <span className="d-inline">
          <Link to="/" className="icon d-inline">
            <FcIcons.FcAbout />
          </Link>
        </span>
        <span className="d-inline">
          <Link to="/" className="icon">
            <AiIcons.AiFillHome />
          </Link>
        </span>
        <span className="d-inline">
          <Link to="/" className="icon">
            <MdIcons.MdWork />
          </Link>
        </span>
      </>
    );
  };
  
  export default SocialIcons;