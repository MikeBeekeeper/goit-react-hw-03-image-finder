import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
    state = {
        images: [],
    };

    componentDidUpdate(prevProps) {
        if (prevProps.request !== this.props.request) {
            fetch(`https://pixabay.com/api/?q=${this.props.request}&page=${this.props.pageNumber}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(data => this.setState({ images: data.hits }))  
            .then(console.log(this.state.images))
        }

        if (prevProps.pageNumber !== this.props.pageNumber) {
            fetch(`https://pixabay.com/api/?q=${this.props.request}&page=${this.props.pageNumber}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(data => this.setState(prevState => {
                    
                return {images: [prevState.images.push(...data.hits)] }
                }))
            .then(console.log(this.state.images))
        }
    }
    
    render() {
        return (
    <ul>
      {this.state.images.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} alt=""/>
        </li>
      ))}
    </ul>
  );
    }
  
};



// ImageGalleryItem.PropTypes = {
//      images: PropTypes.array.isRequired,
//  }

