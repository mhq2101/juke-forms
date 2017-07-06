import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

  constructor() {
    super();
    this.state = {
      artists: [],
      searchArtist: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    console.log(this.state)

    this.setState({
      searchArtist: event.target.value,
    })

  }

  componentDidMount() {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists }));
  }

  render() {

    const artists = this.state.artists.filter(artist => artist.name.match(this.state.searchArtist));

    return (
      <div>
        <form className="form-group" style={{ marginTop: '20px' }}>
          <input
            className="form-control"
            placeholder="Enter artist name"
            onChange={this.handleChange}
          />
        </form>

        <h3>Artists</h3>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
