import './App.css';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    this.onSearch('learning')
  }

  onSearch = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    const selectedVideo = data.items.find(video => {
      const { snippet } = video
      if(snippet.title.includes(term)) {
        return video
      }
    })
    this.setState({ 
      videos: data.items,
      selectedVideo: selectedVideo || data.items[0]
    })
  }  

  onVideoSelect = (video) => {
    console.log('app',video)
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="container ui">
        <SearchBar onSubmit={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {
                this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} />
                : ''
              }
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
