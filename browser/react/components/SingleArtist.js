import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs'
import AllAlbums from './AllAlbums';
import {HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';

export default class SingleArtist extends Component{
	constructor(){
		super();
		this.state = {
			artist: "",
			artistAlbums: [],
			artistSongs: []
		}
	}

	componentDidMount(){
		//get artistId from the browser path and save it to use in our axios requests
    	const artistId = this.props.match.params.artistId;

    	//using artistid, get artist name, artist albums, artist songs

		//artist name
		axios.get(`/api/artists/${artistId}`)
			.then(res => res.data)
      		.then(artist => this.setState({
        		artist: artist
      		}));

		//artist albums
		axios.get(`/api/artists/${artistId}/albums`)
			.then(res => res.data)
      		.then(albums => this.setState({
        		artistAlbums: albums
      		}));

		//artist songs
		axios.get(`/api/artists/${artistId}/songs`)
			.then(res => res.data)
      		.then(songs => this.setState({
        		artistSongs: songs
      		}));

  	}

	render () {

  		const artist = this.state.artist; // or however you've named it

 		 return (
   			 <div>
    		  <h3>{ artist.name }</h3>
     		 <ul className="nav nav-tabs">
        		<li><NavLink to={`/artists/${artist.id}/albums`}>ALBUMS</NavLink></li>
        		<li><NavLink to={`/artists/${artist.id}/songs`}>SONGS</NavLink></li>
     		 </ul>
     		 <div>
     		 	<Route path='/artists/:artistId/albums' render={() => <AllAlbums albums={this.state.artistAlbums}/>} />
     		 	<Route path='/artists/:artistId/songs' render={() => <Songs songs={this.state.artistSongs}/>} />
     		 </div>
      		{/* Routes will go here! */}
   		 </div>
  );
}
}
