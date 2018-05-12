import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookTile from './BookTile';
import BooksIndex from './BooksIndex';
import BookFormContainer from './BookFormContainer';

class BookShowContainer extends Component {
  constructor(props) {

    super(props);
    this.state = {
      books: [],
      bookAuthor: '',
      bookTitle: ''
    };
    // this.addNewBook = this.addNewBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }
  // addNewBook(formPayload) {
  //   fetch('/api/v1/books', {
  //     credentials: 'same-origin',
  //     method: 'post',
  //     body: JSON.stringify(formPayload),
  //     headers: { 'Content-Type': 'application/json' }
  //       }).then(response => response.json())
  //       .then(body => {
  //         let newBookArray = this.state.books.concat(body)
  //         this.setState({ books: newBookArray })
  //       })
  // }
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

      // addNewBook(formPayload) {
      //   fetch('/api/v1/books', {
      //     credentials: 'same-origin',
      //     method: 'post',
      //     body: JSON.stringify(formPayload),
      //     headers: { 'Content-Type': 'application/json' }
      //       }).then(response => response.json())
      //       .then(body => {
      //         let newBookArray = this.state.books.concat(body)
      //         this.setState({ books: newBookArray })
      //       })
      // }

      // deleteBook(formPayload){
      //     fetch('/api/v1/books', {
      //     credentials: 'same-origin',
      //     method: 'delete',
      //     body: JSON.stringify(formPayload),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //   .then(response => {
      //     if (response.ok) {
      //       return response;
      //     } else {
      //       let errorMessage = `${response.status}(${response.statusText})`,
      //         error = new Error(errorMessage);
      //       throw(error);
      //     }
      //   })
      //   .then(response => response.json())
      //   .then(body => {
      //     let arrayAfterDelete = this.state.books.slice(body)
      //   this.setState({ books: arrayAfterDelete });
      //   })
      //   .catch(error => console.error(`Error in fetch: ${error.message}`));
      // }

      // deleteBook(id) {
      //   let newBooks = this.state.books.filter(book => {
      //     return book.id !== id
      //   })
      //   this.setState({ books: newBooks })
      // }

      deleteBook(current_book){

        fetch('/api/v1/books', {
          credentials: 'same-origin',
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
         }
         }).then((response) => {
         const newBooks = this.state.books.filter(book => book.id !== current_book)
           this.setState({books: newBooks})
         })



            // }).then(response => response.json())

          // }).then(console.log(response))
          //
          //
            // .then(json => {
            //   debugger;
            // })
            // .then(body => {
            //   let newBooks = this.state.books.filter(body => {
            //     return body.id !== id
            //   })
            //   this.setState({ books: newBooks })
            //
            // })
      }

//       deleteReview(formPayload) {
//   fetch(`/api/v1/reviews/${formPayload.review.review_id}`, {
//     credentials: 'same-origin',
//     method: 'delete',
//     body: JSON.stringify(formPayload),
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Requested-With': 'XMLHttpRequest',
//       'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
//     }
//   })
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       let errorMessage = `${response.status} (${response.statusText})`,
//       error = new Error(errorMessage);
//       throw(error);
//     }
//   })
//   .then( this.getReviews())
//   .catch(error => console.error(`Error in fetch: ${error.message}`));
// }


  render(){
    let handleAddNewBook = (formPayload) => this.addNewBook(formPayload)

    return(
      <div>
      <h1>Blah ..</h1>

      <BooksIndex
        books={this.state.books}
        deleteBook={this.deleteBook}
      />

      <BookFormContainer
        addNewBook={handleAddNewBook}
      />
    </div>
    )
  }
}

export default BookShowContainer;
