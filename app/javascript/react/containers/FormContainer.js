import React, { Component } from 'react';
import BriannaTextInputField from './BriannaTextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookTitle: '',
      bookAuthor: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      bookTitle: '',
      bookAuthor: ''
    })
  };

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor
    };
    this.props.addNewBook(formPayload);
    // debugger;
    this.handleClearForm(event);
  };

  render() {
    return(
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <BriannaTextInputField
          content={this.state.bookTitle}
          label="Movie Title"
          name="bookTitle"
          handleChange={this.handleChange}
        />
        <BriannaTextInputField
          content={this.state.bookAuthor}
          label="Movie Release Year"
          name="bookAuthor"
          handleChange={this.handleChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
export default FormContainer;
