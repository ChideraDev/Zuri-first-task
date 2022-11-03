import React from "react";
import Anchor from "./Anchor";
import Slack from "../images/slack.jpg";
import Github from "../images/github.png";
import { Link } from "react-router-dom";

const HyperLinkArray = [
  {
    url: "https://training.zuri.team/",
    text: "Zuri Team",
    id: "btn__zuri",
  },
  {
    url: "http://books.zuri.team/",
    text: "Zuri Books",
    id: "books",
  },
  {
    url: "https://books.zuri.team/",
    text: "Python Books",
    id: "book__python",
  },
  {
    url: "https://background.zuri.team/",
    text: "Background Check for Coders",
    id: "pitch",
  },
  {
    url: "https://books.zuri.team/design-rules",
    text: "Design Books",
    id: "book__design",
  },
];


export default function Button() {

  return (
    <div className="links">
      {HyperLinkArray.map((button, index) => (
        <Anchor key = {index} url={button.url} text={button.text} id={button.id} />
      ))}
      <Link to="/contact">Contact Me</Link>
      <div className="brands-pic">
        <div className="brands-pic-inner">
            <img src={Slack} alt="slack" id="brands"/>
            <img src={Github} alt="slack" id="brands"/>
        </div>
      </div>
    </div>
  );
}
