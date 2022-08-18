import React from "react";
import "./Audio.css";
export default function Audio(props) {
  if (props.audio === "") {
    return (
      <span className="Audio">
        <span className="no-audio"> </span>
      </span>
    );
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
