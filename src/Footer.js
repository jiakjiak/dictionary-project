import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      Like my dictionary app?
      <br />
      <a
        href="https://www.linkedin.com/in/jiakoh/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="images/coder.png" className="coder" alt="coder" width="30" />
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/jiakoh/"
        className="linkedinLink"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://github.com/jiakjiak/dictionary-project"
        className="githubLink"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <br />
    </div>
  );
}
