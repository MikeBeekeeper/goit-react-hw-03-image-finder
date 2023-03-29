import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className="Button-wrapper">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
