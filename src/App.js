import React from "react";
import "./App.css";
import DictionarySearch from "./DictionarySearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid container-image">
        <header>
          <div className="title">Dictionary</div>
        </header>
        <h2>Look up...</h2>
        <main>
          <DictionarySearch />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
