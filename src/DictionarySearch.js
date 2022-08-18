import React, { useState } from "react";
import Results from "./Results";
import "./DictionarySearch.css";
import axios from "axios";
export default function DictionarySearch() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  function handleData(response) {
    setData(response.data[0]);
  }
  function makeApiCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    makeApiCall();
  }
  function handleChange(event) {
    setInput(event.target.value);
  }
  return (
    <div className="DictionarySearch">
      <div className="d-flex justify-content-center mb-5">
        <h2 className="search-text">Look up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="..."
            onChange={handleChange}
            className="search-bar"
          />
        </form>
      </div>
      <Results data={data} />
    </div>
  );
}
