import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

// ReactDOM.render(
//   <Router>
//      <div className="col-xs-10">
//         <Route path = '/albums' component = {AllAlbums}/>
//         <Route exact path = '/' component = {AllAlbums}/>
//         <Route path = '/single-album' component = {SingleAlbum}/>
//      </div>
//   </Router>,
//   document.getElementById('app')
// );
