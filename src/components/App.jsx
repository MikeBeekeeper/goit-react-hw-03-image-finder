import React, { Component } from 'react';
import {SearchBar} from './searchBar.js'
import '../index.css';
// import ImageGallery from './imageGallery.js';
import ImageGalleryItem from './imageGalleryItem.js';
import LoadMoreBtn from './button.js';

export class App extends Component {

  state = {
    images: [],
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

  componentDidUpdate(prevState) {
        if (prevState.searchValue !== this.state.searchValue) {
            fetch(`https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.numberOfPage}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(data => this.setState(prev=>({...prev, images: data.hits})))
              .catch(error => alert(error))
        }

        if (prevState.numberOfPage < this.state.numberOfPage) {
            fetch(`https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.numberOfPage}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                // .then(data => this.setState(prevState => {
                    
                // return {images: [...prevState.images, ...data.hits] }
                // }))
              .then(data => this.setState({images: data.hits}))
            .catch(error => alert(error))
        }

        // if (this.state.images.length === 0) {
        //     alert('whoops, array clean')
        //     return
        // }
    }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        
         <ImageGalleryItem images={this.state.images} />
      
         <LoadMoreBtn onClick={this.incrementNumberOfPage} />
      </div>
    )
  }
}
