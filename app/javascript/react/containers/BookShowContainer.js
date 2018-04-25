import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookTile from './BookTile';
import BooksIndex from './BooksIndex';
import BookFormContainer from './BookFormContainer';

class BookShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.addNewBook = this.addNewBook.bind(this);
  }

  componentDidMount(){
      fetch('/api/v1/books')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status}(${response.statusText})`,
              error = new Error(errorMessage);
            throw(error);
          }
        })

        .then(response => response.json())
        .then(body => {
          let allBooks = body.books
        this.setState({ books: allBooks });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  addNewBook(formPayload) {
  fetch('/api/v1/books', {
    credentials: 'same-origin',
    method: 'post',
    body: JSON.stringify(formPayload),
    headers: { 'Content-Type': 'application/json' }
 }).then(response => response.json())
  .then(body => {
    let newBookArray = this.state.books.concat(body)
    this.setState({ books: newBookArray })
  })
}
  render(){
    let handleAddNewBook = (formPayload) => this.addNewBook(formPayload)

    return(
      <div>
      <h1>Updated List</h1>

      <BooksIndex
        books={this.state.books}
      />

      <BookFormContainer
        addNewBook={handleAddNewBook}
      />
    </div>
    )
  }
}

export default BookShowContainer;
