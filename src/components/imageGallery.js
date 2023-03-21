import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    )
};

export default ImageGallery;

// ImageGallery.PropTypes = {
//     children: PropTypes.array.isRequired
// }


