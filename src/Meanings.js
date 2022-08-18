import React from "react";
import Meaning from "./Meaning";
export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
