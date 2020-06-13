import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        id: 1,
        name: 'Attention',
        artist: 'Charlie Puth',
        album: '???'
      }],
      playlistName: 'You just want attention',
      playlistTracks: [{
        id: 2,
        name: 'One call away',
        artist: 'Charlie Puth',
        album: '1111'
      }]
    };
    this.addTracks = this.addTracks.bind(this);
    this.removeTracks = this.removeTracks.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTracks(newTrack) {
    let exists = this.state.playlistTracks.some(track => {
      return track.id === newTrack.id;
    });
    if(!exists) {
      let tracks = this.state.playlistTracks;
      tracks.push(newTrack);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTracks(newTrack) {
    let tracks = this.state.playlistTracks.filter(track => {
      return track.id !== newTrack.id;
    });
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTracks} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTracks} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
