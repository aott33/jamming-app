// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Playlist} from '../Playlist/Playlist';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchResults:
      [
        {
          name: 'test-name-0',
          artist: 'test-artist-0',
          album: 'test-album-0',
          id: '0'
        },
        {
          name: 'test-name-1',
          artist: 'test-artist-1',
          album: 'test-album-1',
          id: '1'
        }
      ],
      playlistName: 'Playlist1',
      playlistTracks: [
        {
          name: 'test-name-0',
          artist: 'test-artist-0',
          album: 'test-album-0',
          id: '0'
        },
        {
          name: 'test-name-1',
          artist: 'test-artist-1',
          album: 'test-album-1',
          id: '1'
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults= {this.state.searchResults}/>
            <Playlist playlistName= {this.state.playlistName} playlist= {this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;