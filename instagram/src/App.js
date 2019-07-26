import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsContainer from './components/PostsContainer/PostsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
