import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <p className="example">
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
