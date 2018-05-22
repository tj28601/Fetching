import React from 'react';

const BookTile = props => {

  return (
    <div>
    <li>{`${props.title} by ${props.author}`}<button id="deleteReviewButton" onClick={props.deleteBookClick}>Delete Book</button> <button id="addToFavorites" onClick={props.addBooktoFavorites}>Add To Favorites</button> <button id="deleteFromFavorites" onClick={props.deleteBookfromFavs}>Delete From Favorites</button></li>
    </div>

  )
}

export default BookTile;
