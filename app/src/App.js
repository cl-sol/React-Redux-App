import React from 'react';
import './App.css';

import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Kanye Sayings</h1>
        <Quote />
        
      </header>
    </div>
  );
}

export default App;
