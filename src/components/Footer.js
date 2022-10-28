import React from 'react';
import FooterImage from "../images/I4G.png";

export default function Footer(){
    return (
        <div className="footer">
        <div className="footer-inner">
           <h1 id="footer-h1">Zuri<span id="footer-span">.</span>Internship</h1> 
           <p id="footer-p">HNG Internship 9 Frontend Task</p>
           <img src={FooterImage} alt="I4G-logo" id="footer-logo"/>
           </div>
        </div>
    )
}