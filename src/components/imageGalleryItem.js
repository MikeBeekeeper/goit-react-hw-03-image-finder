import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from './modal.js';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

    toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
    };
    

  render() {
    return (
          <li
            className="ImageGalleryItem"
            onClick={this.toggleModal}
          >
            <img className="ImageGalleryItem-image" src={this.props.webformatURL} alt={this.props.tags}/>
            {this.state.showModal && (
              <Modal onModalClick={this.toggleModal}>
                <img src={this.props.largeImageURL} alt={this.props.tags} />
              </Modal>
            )}
          </li>
    );
  }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};
