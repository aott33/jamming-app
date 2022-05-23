import './Playlist.css';
import React from 'react';
import {TrackList} from '../TrackList/TrackList';

export class Playlist extends React.Component {
    render () {
        return (
            <div className="Playlist">
                <input defaultValue = {this.props.playlistName}/>
                <TrackList tracks = {this.props.playlist}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}