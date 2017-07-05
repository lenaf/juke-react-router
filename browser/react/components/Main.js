import React, { Component } from 'react';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter as Router, Route, link} from 'react-router-dom';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAlbum: {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  selectAlbum(albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  deselectAlbum() {
    this.setState({ selectedAlbum: {} });
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
          <Router>
            <div className="col-xs-10">
              <Route path='/albums' component={AllAlbums} />
              <Route exact path='/' component={AllAlbums} />
              <Route path='/single-album' component={SingleAlbum} />
            </div>
          </Router>
        <Player />
      </div>
    );
  }
}
