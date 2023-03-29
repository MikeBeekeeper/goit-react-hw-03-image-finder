import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Modal from './modal.js';

// export default class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(prev => ({ showModal: !prev.showModal }));
//   };

//   render() {
//     return (
//       <>
//         {this.props.images.map(image => (
//           <li
//             className="ImageGalleryItem"
//             key={image.id}
//             onClick={this.toggleModal}
//           >
//             <img
//               className="ImageGalleryItem-image"
//               src={image.webformatURL}
//               alt={image.tags}
//             />
//             {this.state.showModal && (
//               <Modal onModalClick={this.toggleModal}>
//                 <img src={image.webformatURL} alt={image.tags} />
//               </Modal>
//             )}
//           </li>
//         ))}
//       </>
//     );
//   }
// }

const ImageGalleryItem = ({webformatURL,tags}) => {
    return (
        <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={webformatURL} alt={tags}/>
        </li>
    )
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
