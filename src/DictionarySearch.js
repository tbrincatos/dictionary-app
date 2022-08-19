import React, { useState } from "react";
import Results from "./Results";

import "./DictionarySearch.css";
import axios from "axios";
export default function DictionarySearch() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [images, setImages] = useState("");
  function handleData(response) {
    setData(response.data[0]);
  }
  function handleImages(response) {
    setImages(response.data.photos);
  }
  function makeApiCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleData);

    let pexelsKey = `563492ad6f917000010000017e0990cead604ea0bdba8c1900ca1e6c`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=1`;
    axios
      .get(pexelsUrl, { headers: { Authorization: pexelsKey } })
      .then(handleImages);
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
      <Results data={data} images={images} />
    </div>
  );
}
