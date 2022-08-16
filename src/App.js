import React from "react";
import "./App.css";
import DictionarySearch from "./DictionarySearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="heading">
          <div className="title">MALTISIAN</div>
        </header>
        <h2>Dictionary App</h2>
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
