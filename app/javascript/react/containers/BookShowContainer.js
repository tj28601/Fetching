import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookTile from './BookTile';
import BooksIndex from './BooksIndex';
import BookFormContainer from './BookFormContainer';
import SideBarComponent from './SideBarComponent';
import { slide as Menu } from 'react-burger-menu';

class BookShowContainer extends Component {
  constructor(props) {

    super(props);
    this.state = {
      favorites: [],
      bookAuthor: '',
      bookTitle: '',
      books:[]
    };
    this.addNewBook = this.addNewBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
  }



    componentWillUpdate(){
      fetch('/api/v1/books', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
        })
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
        // .then(json =>{
        //   debugger;
        // })

        .then(body => {
          let allBooks = body.books
            this.setState({ books: allBooks });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));

}
//   componentWillMount(){
// fetch('/api/v1/favorites')
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//         let errorMessage = `${response.status}(${response.statusText})`,
//           error = new Error(errorMessage);
//           throw(error);
//       }
//   })
//   .then(response => response.json())
//   .then(body => {
//     let allFavorites = body.favorites
//       this.setState({ favorites: allFavorites });
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`));
// }

      deleteBook(current_book){
        fetch('/api/v1/books/' + current_book, {
          method: 'DELETE',
          credentials: 'same-origin',
          headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
         }

        }).then((response) => response.json())
         const newBooks = this.state.books.filter(book => book.id !== current_book)
           this.setState({books: newBooks})

      }

addToFavorites(book){
  fetch('/api/v1/favorites', {
    credentials: 'same-origin',
    method: 'post',
    body: JSON.stringify(book),
    headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      .then(body => {
        let favoritesArray = this.state.favorites.concat(body)
        this.setState({ favorites: favoritesArray })
        })
  }
  deleteFromFavorites(current_favorite){
      fetch('/api/v1/favorites/' + current_favorite, {
        method: 'DELETE',
        credentials: 'same-origin',
        // body: JSON.stringify(book),
        headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
       }

      }).then((response) => response.json())
      const newFavs = this.state.favorites.filter(favorite => favorite.id !== current_favorite)
        this.setState({favorites: newFavs})

   }

  addNewBook(formPayload){
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
// componentWillMount(){
//   this.addNewBook()
// }
// componentDidMount(){
//   this.addNewBook()
// }
    // <SideBarComponent
    //   favorites={this.state.favoeites}
    //   <Menu isOpen />
    //   <Menu isOpen={ true } />
    // />

  render(){
    let handleAddNewBook = (formPayload) => this.addNewBook(formPayload)

    let sideBar = (
      <SideBarComponent
        favorites={this.state.favorites}
        deleteFromFavorites={this.deleteFromFavorites}
      />
    )
    return(
    <div>
    <div>
          {sideBar}
          </div>


      <BooksIndex
        books={this.state.books}
        deleteBook={this.deleteBook}
        addToFavorites={this.addToFavorites}
        deleteFavorite={this.deleteFromFavorites}
      />

      <BookFormContainer
        addNewBook={handleAddNewBook}
      />
    </div>
    )
  }
}

export default BookShowContainer;
