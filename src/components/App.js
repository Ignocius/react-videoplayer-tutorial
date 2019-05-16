import './App.css';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
    console.log(process.env)
  }

  onSearch = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: data.items })
  }  

  render() {
    return (
      <div className="container ui">
        <SearchBar onSubmit={this.onSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
