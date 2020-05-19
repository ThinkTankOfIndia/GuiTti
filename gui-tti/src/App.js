import React from 'react';
import logo from './Icons/Tti_Logo.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        Ribbon - Header, 
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo"/>
          <p>
            Vision statement for The group.
        </p>          
        </header>
      </div>

      <div>
        Ribbon - Header
      </div>
    </div>

  );
}

export default App;
