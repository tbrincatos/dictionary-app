import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
        <div>
          {props.meaning.definitions.map(function(definition, index) {
            return (
              <div key={index}>
                <li className="definition">{definition.definition}</li>
                <p className="example">
                  <em>{definition.example}</em>
                </p>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
