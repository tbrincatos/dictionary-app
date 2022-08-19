import React from "react";
import Images from "./Images";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";
export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <div className="d-flex justify-content-between">
            <div>
              <h2>{props.data.word}</h2>
              <Phonetics phonetics={props.data.phonetics} />{" "}
            </div>
            <div>
              <Images images={props.images} />
            </div>
          </div>
        </section>
        <Meanings meanings={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
