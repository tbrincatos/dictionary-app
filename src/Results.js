import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";
export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        <Phonetics phonetics={props.data.phonetics} />
        <Meanings meanings={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
