import React from 'react';
import BookTile from './BookTile'

const BooksIndex = props => {

  let booksArray = props.books.map(book => {
    console.log(props)
    return(
      <BookTile
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}

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
