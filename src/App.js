import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Faruk Ahmad",
    job :"Student"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h1>my heading:{person.name +" "+ person.job}</h1>
        <h3>Programming</h3>
      </header>
    </div>
  );
}

export default App;
