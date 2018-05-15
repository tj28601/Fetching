import React from 'react';

// Router, browserHistory, Route, IndexRoute,
const FavoriteTile = props => {

  return (
    <div>
  <li>{`${props.title} by ${props.author}`}<button id="deleteReviewButton" onClick={props.deleteFavOnList}>Delete Book</button></li>
    </div>

  )
}

export default FavoriteTile;
