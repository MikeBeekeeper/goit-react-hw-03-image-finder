import React, { Component } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
// import { ToastContainer, toast } from 'react-toastify';
import { SearchBar } from './searchBar.js';
import '../index.css';
import ImageGallery from './imageGallery.js';
// import ImageGalleryItem from './imageGalleryItem.js';
import LoadMoreBtn from './button.js';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    numberOfPage: 1,
    isLoading: false,
  };

  onSearchSubmit = value => {
    this.setState({ searchValue: value });
  };

  incrementNumberOfPage = () => {
    this.setState(prevState => {
      return { numberOfPage: prevState.numberOfPage + 1 };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ isLoading: true });
      return axios
        .get(
          `https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.numberOfPage}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(data =>
          this.setState(prev => ({
            ...prev,
            images: data.data.hits,
            isLoading: false,
          }))
        )
        .catch(error => alert(error));
    }

    if (prevState.numberOfPage < this.state.numberOfPage) {
      this.setState({ isLoading: true });
      return axios
        .get(
          `https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.numberOfPage}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(data =>
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...data.data.hits],
              isLoading: false,
            };
          })
        )
        .catch(error => alert(error));
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images}/>
        )}
        {this.state.images.length > 0 && !isLoading && (
          <LoadMoreBtn onClick={this.incrementNumberOfPage} />
        )}
        {isLoading && (
          <Oval
            height={180}
            width={180}
            color="#3f51b5"
            secondaryColor="#3f51b5"
            wrapperClass="OvalWrapper"
          />
        )}
      </div>
    );
  }
}
