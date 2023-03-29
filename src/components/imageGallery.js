import PropTypes from 'prop-types';
import ImageGalleryItem from './imageGalleryItem.js';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
