import React, { useState } from "react";
import Results from "./Results";
import "./DictionarySearch.css";
import axios from "axios";
export default function DictionarySearch() {
  const [input, setInput] = useState(null);
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
      <div className="d-flex justify-content-between">
        <div>
          <h2>Look up...</h2>
          <button className="btn btn-primary">hi</button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="..."
              onChange={handleChange}
              className="search-bar"
            />
          </form>
        </div>
      </div>
      <Results data={data} />
    </div>
  );
}
