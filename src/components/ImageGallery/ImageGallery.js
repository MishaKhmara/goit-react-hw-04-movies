import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, bigImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {pictures.map(picture => (
        <ImageGalleryItem {...picture} key={picture.id} bigImage={bigImage} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  pictures: PropTypes.array,
};

export default ImageGallery;
