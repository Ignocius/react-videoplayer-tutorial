import './App.css';
import React, { Component } from 'react';
import SearchBar from './SearchBar'

class App extends Component {
  constructor(props) {
    super(props);


  }

  onSearch = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className="container ui">
        <SearchBar onSubmit={this.onSearch} />
      </div>
    );
  }
}

export default App;
