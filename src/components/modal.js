import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  hideModalKeydown = e => {
    if (e.key === 'Escape') {
      this.props.onModalClick();
    }
  };

  hideModalClick = e => {
    if (e.target.className === 'Overlay') {
      this.props.onModalClick();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hideModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModalKeydown);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.hideModalClick}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
};
