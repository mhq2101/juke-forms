import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';

export default class SinglePlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playlist: {},
        };
    }

    componentDidMount() {
        const playlistId = this.props.match.params.playlistId;

        axios.get(`/api/playlists/${playlistId}`)
            .then(res => res.data)
            .then(playlist => this.setState({
                playlist
            }));
    }

    componentWillReceiveProps(nextProps) {
        const nextPlaylistId = nextProps.match.params.playlistId;
        const currentPlaylistId = this.props.match.params.playlistId;
        if (nextPlaylistId !== currentPlaylistId) {
        axios.get(`/api/playlists/${currentPlaylistId}`)
            .then(res => res.data)
            .then(playlist => {
                this.setState({
                    playlist
                })
            });
        }
    }



        render() {
            const playlist = this.state.playlist;

            return (
                <div className="playlist">
                    <h3>{playlist.name}</h3>
                    {/*<img src={ playlist.imageUrl } className="img-thumbnail" />*/}
                    <Songs songs={playlist.songs} />
                    {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
                    <hr />
                </div>
            );
        }
    }
