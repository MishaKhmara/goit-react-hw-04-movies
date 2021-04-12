import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, bigImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
        data-lgimg={largeImageURL}
        data-tag={tags}
        onClick={bigImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
