import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import NewPlaylist from './NewPlaylist'
import SinglePlaylist from './SinglePlaylist'
import axios from 'axios';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playlists: []
    }

    this.addPlaylist = this.addPlaylist.bind(this);
  }

  addPlaylist(playlistName) {
    axios.post('/api/playlists/', {
      name: playlistName
    })
      .then(res => res.data)
      .then(playlist => {
        this.setState({
          playlists: [...this.state.playlists, playlist]
        })
      });
  }

  componentDidMount() {
    axios.get('/api/playlists/')
      .then(res => res.data)
      .then(playlists => {
        this.setState({
          playlists
        })
      });
  }


  render() {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={this.state.playlists} addPlaylist={this.addPlaylist} />
            {/*<Route exact path="/new-playlist/" component={NewPlaylist} />*/}
            <Route path="/new-playlist" render={() => <NewPlaylist addPlaylist={this.addPlaylist} />} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/playlists/:playlistId" component={SinglePlaylist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
