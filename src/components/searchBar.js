import React, { Component } from 'react';
import '../index.css';

export class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  onSearchInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      alert('Please enter request');
      return;
    }
    this.props.onSubmit(this.state.inputValue.toLowerCase());
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={inputValue}
            onChange={this.onSearchInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
