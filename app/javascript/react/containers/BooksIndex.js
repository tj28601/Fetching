import React from 'react';
import BookTile from './BookTile'

const BooksIndex = props => {
// debugger;
  let booksArray = props.books.map(book => {
        let id = book.id
        let book_id = book.id
        // let user_id = 2
        let author = book.author
        let title = book.title
        let handleDelete = () => props.deleteBook(id)
        let handleAddNewFav = () => props.addToFavorites(book)
        let handleDeleteFav = () => props.deleteFavorite(book)
    return(
      <BookTile
        key={id}
        id={id}
        title={title}
        author={author}
        deleteBookClick={handleDelete}
        addBooktoFavorites={handleAddNewFav}
        deleteBookfromFavs={handleDeleteFav}
      />
    )
  })
  return(
    <ul>
      {booksArray}
    </ul>
  );
}

export default BooksIndex;
