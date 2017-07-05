import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SingleArtist extends Component{
	constructor(){
		super();
		this.state = {
			artistName: "",

		}
	}

	componentDidMount(){
    	const artistId = this.props.match.params.artistId;

    	axios.get(`/api/artists/${artistId}`)
      		.then(res => res.data)
      		.then(artist => this.setState({
        		artistName: artist.name
      		}));

        axios.get('/')
  	}

	render(){
		// console.log('our state ',this.state.artist.name);
		return (
			<div>
  				<h3>{this.state.artistName}</h3>
 				 <h4>ALBUMS</h4>
  				<h4>SONGS</h4>
			</div>

			)
	}
}