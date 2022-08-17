import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="definition mt-1">{definition.definition}</p>
              <p className="example">
                <em>{definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
