import React from "react";
import Audio from "./Audio.js";
import "./Phonetics.css";
export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <span key={index}>
            <Audio audio={phonetic.audio} />
            <span className="phonetic-text">{phonetic.text}</span>
          </span>
        );
      })}
    </div>
  );
}
