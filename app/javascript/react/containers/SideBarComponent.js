import React, { Component } from 'react';
import FavoriteTile from './FavoriteTile';
import { slide as Menu } from 'react-burger-menu';



const SideBarComponent = props => {

  // console.log(props.favorites)
  //   debugger;

    let favoritesArray = props.favorites.map(favorite => {
          let id = favorite.id
          let author = favorite.book.author
          let title = favorite.book.title
          let deleteFromFavorites = () => props.deleteFromFavorites(id)

      return(
        <FavoriteTile
          key={id}
          id={id}
          title={title}
          author={author}
          deleteFavOnList = {deleteFromFavorites}
        />
      )
    })

    return(
      <Menu id='sideBar'>
         <h1 id='favorites'> Favorites </h1>
         <h1>Hello</h1>
         <ul>
           {favoritesArray}
         </ul>
       </Menu>
    )
}
// return (
//   <FavoriteTile />
//
// )
// }

export default SideBarComponent;
