import React from "react";

import "./App.css";

import DictionarySearch from "./DictionarySearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid container-image">
        <div className="flex-wrapper">
          <div>
            <header>
              <h1 className="title">Dictionary</h1>
            </header>
            <main>
              <DictionarySearch />
            </main>
          </div>
          <div>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
