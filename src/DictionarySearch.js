import React, { useState } from "react";
import axios from "axios";
export default function DictionarySearch() {
  const [input, setInput] = useState(null);
  function handleData(response) {
    console.log(response.data[0]);
  }
  function makeApiCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${input}`);
    makeApiCall();
  }
  function handleChange(event) {
    setInput(event.target.value);
  }
  return (
    <div className="DictionarySearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
