import React from 'react'

import Star from "../assets/Star 1.png";
import Group from "../assets/Group.png";


export default function Header() {
  return (
    <div className="container">
        <div className="header">
          <div className="logo">
            <img src={Group} alt="Uifry logo" />
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Pricing</a>
            <a href="#">Features</a>
          </div>
          <div className="download-button">
            <a>Download</a>
          </div>
          <div>
            
            <img src={Star} alt="" />
          </div>
        </div>
      </div>
  )
}
