import DataSource from '../data/data-movie.js'
import '../component/list-movie.js'

const main = () => {
    const result = DataSource.getMovie();

    const searchItems = document.querySelector('search-container');
    const buttonSearchClick = () => {
        const result = DataSource.searchMovieItems(searchItems.value);
    }
    searchItems.clickEvent = buttonSearchClick;
};
export default main;