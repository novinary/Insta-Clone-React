import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBarContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      </div>
    );
  }
}

export default App;
