// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
          <Travel 
            photo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg"
            country=" France "
            destination=" Paris "
            distance=" c'est à 800 km de Toulon"    
            />

          <Travel 
            photo="http://www.kabdani.ma/upload_LG/Ph_pack_3976_1245.jpg"
            country=" Espagne "
            destination=" Madrid "
            distance=" c'est à 1200 km de Toulon"    
            />
      </div>
    );
  }
}

export default App;
