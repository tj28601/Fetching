import React from 'react';

// Router, browserHistory, Route, IndexRoute,
const BookTile = props => {

  return (
    <div>
    <li>{`${props.title} by ${props.author}`}<button id="deleteReviewButton" onClick={props.deleteBookClick}>Delete Review</button></li>
    </div>

  )
}

export default BookTile;
