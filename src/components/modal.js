import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  hideModalClick(e) {
    if (e.key === 'Escape') {
      this.props.onModalClick();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.hideModalClick);
  }

  render() {
    return (
        <div className="Overlay" onClick={this.props.onModalClick}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
};
