import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

export default class Main extends Component {

  constructor(props) {
    super(props);
  
  }



  render() {
    return (
      <div id="main" className="container-fluid">
        
          <Router>
          <div id='seriously'>
            <div className="col-xs-2">
              <Sidebar deselectAlbum={this.deselectAlbum} />
            </div>
            <div className="col-xs-10">
              <Route exact path='/albums' component={AllAlbums} />
              <Route exact path='/' component={AllAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists}/> 
              <Route path="/artists/:artistId" component={SingleArtist}/> 
              </div>
            </div>
          </Router>
        <Player />
      </div>
    );
  }
}
