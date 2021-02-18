import galleryTpl from '../templates/gallery.hbs';
import refs from './refs';

function updateGalleryMarkup(items) {
  const markup = galleryTpl(items);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;


