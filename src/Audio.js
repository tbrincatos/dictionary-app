import React from "react";

import "./Audio.css";

export default function Audio(props) {
  if (props.audio === "") {
    return null;
  } else {
    return (
      <span className="Audio">
        <a href={props.audio} target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="sound" title="Listen">
            🔊
          </span>
        </a>
      </span>
    );
  }
}
