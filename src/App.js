import React, { Component } from 'react';
import Search from './Components/Search';
import "./styles.css";
import youtubeApi from './api/youtube';
import VideoList from './Components/VideoList';
import Videoplayer from './Components/VideoPlayer';
class App extends Component {
  state = {
    videosList: [],
    selectedVideoId: null
  };

  onVideoSelected = videoId => {
    this.setState({
      selectedVideoId:videoId
    })
  }
  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videosList: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosList}
        />
        <Videoplayer videoId={this.state.selectedVideoId} />
      </div>
    )
  }
}

export default App
