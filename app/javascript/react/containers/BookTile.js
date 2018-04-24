import React from 'react';

// Router, browserHistory, Route, IndexRoute,
const BookTile = props => {
  console.log(props)
  return (
    <div>
    <li>{`${props.title} by ${props.author}`}</li>
    </div>

  )
}

export default BookTile;
