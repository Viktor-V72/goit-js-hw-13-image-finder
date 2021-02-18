const API_KEY = '20199536-336852708a089d3c335e2e4d9';
import notify from './notification';

export default {
  searchQuery: '',
  page: 1,
  fetchItems() {
    
    return fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        if (hits.length === 0) {
          notify({
            type: 'error',
            title:'SORRY!',
            text: 'no matches found',
            delay: 2500,
          });
          return ;
        }

        notify({
          text: 'Look what we have found!',
          delay: 2500,

        });
        this.incrementPage();
        return hits;
        
      })
      .catch(error => console.log(error))
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage(){
  this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },

};
