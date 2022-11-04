import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="contact_page">
    <div className="contact">
      <div className="contact_header">
        <h1 id="contact_heading">Contact Me</h1>
        <p id="contact_about">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
        <div className="contact-input1">
        <div className="firstName">
        <label className="name_labels">
            First Name
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
            />
          </label>
        </div>
         <div className="lastName">
         <label className="name_labels">
            Last Name
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
            />
          </label>
         </div>
         
        </div>
<div className="email_div">
<label className="name_labels">
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="yourname@email.com"
          />
        </label>
</div>
       <div className="textarea">
       <label className="name_labels">
          Message
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </label>
       </div>
       <div class="checkbox_side">
       <label id="checkbox_label">
          <input type="checkbox" id="checkbox" />
          You agree to providing your data to Chidera Onyekachi who may contact
          you.
        </label>
       </div>
        
        <input type="submit" value="Send message" id="btn__submit" />
    </div>
    <Footer/>
    </div>
  );
}
