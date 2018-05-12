import React from 'react';
import BookTile from './BookTile'

const BooksIndex = props => {

  let booksArray = props.books.map(book => {
        let id = book.id
        let author = book.author
        let title = book.title
          let handleDelete = () => props.deleteBook(id)
    return(
      <BookTile
        key={id}
        id={id}
        title={title}
        author={author}
        deleteBookClick={handleDelete}
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
