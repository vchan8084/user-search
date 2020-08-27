import React from 'react';
import { SearchBar } from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div>
      <div id="navbar" className="navbar">
        <h1 id="title">GitHub User Search</h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
