import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import apiService from './js/apiservice';
import refs from './js/refs';
import updateGalleryMarkup from './js/update-gallery-markup';
import notify from './js/notification';

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;
    refs.gallery.innerHTML = '';
    

    apiService.resetPage();

    refs.loadMoreBtn.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden');
    
    apiService.fetchItems().then(hits => {
        refs.loadMoreBtn.classList.remove('is-hidden');
        updateGalleryMarkup(hits);
        
    }).finally(() => {
        refs.spinner.classList.add('is-hidden');
    }).catch(error => {
        console.log(error)

});
});

refs.loadMoreBtn.addEventListener('click', () => {
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden');

    apiService.fetchItems().then(hits => {
        updateGalleryMarkup(hits);
        refs.loadMoreBtn.classList.remove('is-hidden');
        refs.spinner.classList.add('is-hidden');
     }).finally(() => {
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior:'smooth',
        })
        
    });
})