import React, { Component } from 'react';
import Songs from './Songs';
import axios from 'axios';
import ReactHTMLEmail from 'react-html-email';
// import { Email, Item, Span, A, renderEmail } from 'react-html-email';
// import NewEmail from './Email';

export default class SingleAlbum extends Component {
  constructor(){
    super();
    this.state = {
      selectedAlbum: {}
    }
  }

  componentDidMount(){
    const albumId = this.props.match.params.albumId;

    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }
  render () {
    // console.log(this.props.match.params);

    const album = this.state.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
