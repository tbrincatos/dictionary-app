import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/tbrincatos/dictionary-app.git"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to GitHub account"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://maltisian.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Portfolio"
      >
        Tamsin Brincat
      </a>
      <span role="img" aria-label="girl">
        {" "}
        👩‍🦰
      </span>
    </div>
  );
}
