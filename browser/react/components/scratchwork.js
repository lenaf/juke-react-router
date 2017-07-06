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