import React, { useState } from "react";

export default function DictionarySearch() {
  const [input, setInput] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${input}`);
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
