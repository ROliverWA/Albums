import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from "./AlbumDetail";



class AlbumList extends Component {
        state = { albums: [] };

        componentWillMount() {
            fetch('https://rallycoding.herokuapp.com/api/music_albums')
                .then(response => response.json())
                .then(rdata => { this.setState({albums: rdata})}
            );
        }

        renderAlbums() {
            return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album = {album} />
            );
        }

        render() {
            console.log(this.state);
        return (
            <View>
                { this.renderAlbums()}
            </View>
        );

    }
}

export default AlbumList;
