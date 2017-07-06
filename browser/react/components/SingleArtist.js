import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Songs from '../components/Songs'

export default class SingleArtist extends Component{
	constructor(){
		super();
		this.state = {
			artistName: "",
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
        		artistName: artist.name
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

	render(){
		// console.log('our state ',this.state.artist.name);
		const artistName = this.state.artistName
		const artistAlbums = this.state.artistAlbums
		const artistSongs = this.state.artistSongs

		return (
			<div>
  				<h3>{artistName}</h3>
 				    <div>
						<h3>Albums</h3>
						<div className="row">
						{
							artistAlbums.map(album => (
								<div className="col-xs-4" key={ album.id }>
								<Link to={`/albums/${album.id}`}className="thumbnail">
									<img src={ album.imageUrl } />
									<div className="caption">
									<h5>
										<span>{ album.name }</span>
									</h5>
									<small>{ album.songs.length } songs</small>
									</div>
								</Link>
								</div>
							))
						}
						</div>
					</div>
  				<Songs songs={artistSongs} />
			</div>

			)
	}
}
