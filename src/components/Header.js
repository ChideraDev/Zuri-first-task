import React from 'react';
import ProfileImage from "../images/profile.jpg";

export default function HeaderComponent() {
    return(
        <div className="header">
        <img src={ProfileImage} id="profile__img" alt="Profile_pic"/>
      
        <h1 id="twitter">Chidera Onyekachi</h1>
        <h1 id="slack">chideraonyekachi04</h1>
        </div>
    )
}