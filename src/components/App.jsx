import React, { Component } from 'react';
import {SearchBar} from './searchBar.js'
import '../index.css';
// import ImageGallery from './imageGallery.js';
import ImageGalleryItem from './imageGalleryItem.js';
import LoadMoreBtn from './button.js';

export class App extends Component {

  state = {
    searchValue: '',
    numberOfPage: 1,
  }

  onSearchSubmit = ( value ) => {
    this.setState({ searchValue: value })
  }

  incrementNumberOfPage = () => {
    this.setState(prevState => {
      return { numberOfPage: prevState.numberOfPage + 1 }
    })
  }

  componentDidUpdate() {
  
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        
          <ImageGalleryItem request={this.state.searchValue} pageNumber={this.state.numberOfPage}/>
        
        <LoadMoreBtn onClick={this.incrementNumberOfPage} />
      </div>
    )
  }
}
