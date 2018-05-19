import React, { Component } from 'react';
import TextInputField from './TextInputField';

class BookFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookAuthor: '',
      bookTitle: ''
    }
        this.handleBookAuthorChange = this.handleBookAuthorChange.bind(this);
        this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleBookAuthorChange(event) {
    let value = event.target.value
    this.setState({ bookAuthor: value })
  }
  handleBookTitleChange(event) {
    let value = event.target.value
    this.setState({ bookTitle: value })
  }
  handleClearForm() {
    this.setState({
      bookTitle: '',
      bookAuthor: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      book: {
      title: this.state.bookTitle,
      author: this.state.bookAuthor,
  }}
  // debugger;
    this.props.addNewBook(formPayload);
    this.handleClearForm();
  }
  handleDelete(event){
  let formPayload = {
  book: {
    title: this.state.bookTitle,
    author: this.state.bookAuthor,
} }
this.props.deleteReview(formPayload)
this.setState({bookTitle:"", bookAuthor:""})
}
  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <TextInputField
        label='Book Title'
        value={this.state.BookTitle}
        name='bookTitle'
        handleChange={this.handleBookTitleChange}
      />
      <TextInputField
        label='Book Author'
        value={this.state.BookAuthor}
        name='bookAuthor'
        handleChange={this.handleBookAuthorChange}
      />
      <input type='submit' value='Submit' />
    </form>
    )
  }
}

export default BookFormContainer;
