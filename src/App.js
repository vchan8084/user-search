import React from 'react';
import SearchPage from './components/Search';
import './App.css';

function App() {
  return (
    <div>
      <div id="navbar" className="navbar">
        <h1 id="title">GitHub User Search</h1>
        <SearchPage />
      </div>
    </div>
  );
}

export default App;
