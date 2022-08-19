import React from "react";
import Meaning from "./Meaning";
export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function(meaning, index) {
        return (
          <ul key={index} className="m-0 p-0">
            <Meaning meaning={meaning} />
          </ul>
        );
      })}
    </div>
  );
}
