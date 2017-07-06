import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';
import NoMatch from './NoMatch'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';




var  Main =  (props) => {
  return(
     <div id="main" className="container-fluid">
        
          <Router>
          <div id='seriously'>
            <div className="col-xs-2">
              <Sidebar/>
            </div>
            <div className="col-xs-10">
            <Switch>
              <Route exact path='/albums' component={StatefulAlbums} />
              <Route exact path='/' component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists}/> 
              <Route path="/artists/:artistId" component={SingleArtist}/> 
              <Route path="*" component={NoMatch}/>
              </Switch>
              </div>
            </div>
          </Router>
        <Player />
      </div>
  );
}

export default Main
