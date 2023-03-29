import PropTypes from 'prop-types';

const Modal = ({ children, onModalClick }) => {
  return (
    <div className="Overlay" onClick={onModalClick}>
      <div className="Modal">{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
};
