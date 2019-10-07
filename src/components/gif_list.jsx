// THIS IS EXTENDED SOLUTION FROM THE LECTURE BUT DOESN'T WORK
// LEFT IT AS IT STANDS - NOT WORKING

// import React, { Component } from 'react';
// import Gif from './gif.jsx';

// class GifList extends Component {
//   renderList = (props) => {
//     return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />);
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   }
// }

// export default GifList;


import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
