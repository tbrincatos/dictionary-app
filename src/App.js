import React from "react";
import "./App.css";
import DictionarySearch from "./DictionarySearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <div className="title">Dictionary</div>
          <h2>Look up...</h2>
          <main>
            <DictionarySearch />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
