import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const {playlists}  = props;
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <hr />
          <ul className="list-unstyled">
            {
              playlists && playlists.map(playlist => {
                return (
                <li className="playlist-item menu-item" key={playlist.id}>
                  <Link to="FILL_ME_IN">{playlist.name}</Link>
                </li>
                )
              })
            }
          </ul>
          <Link className="btn btn-primary btn-block" to="/new-playlist">
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
    </Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
