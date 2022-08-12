import React from "react";
import "./App.css";
import DictionarySearch from "./DictionarySearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h3>Maltisian</h3>
          <h2>Dictionary App</h2>
        </header>
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
