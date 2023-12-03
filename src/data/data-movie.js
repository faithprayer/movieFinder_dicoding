class DataSource {
    static getMovie = () => {
        const baseUrl = 'https://api.themoviedb.org/3';
        const apiKEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGY4ODgyMGE1NjU0NDI2ZjQ1MDU3OTUzYWNjOGVhMiIsInN1YiI6IjY1MDNmOTI3ZWZlYTdhMDExYWI5YWIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEzQC-A67vqGtlb2DeweqlWjrNH1GVsTXtYpldo8Ae8';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGY4ODgyMGE1NjU0NDI2ZjQ1MDU3OTUzYWNjOGVhMiIsInN1YiI6IjY1MDNmOTI3ZWZlYTdhMDExYWI5YWIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEzQC-A67vqGtlb2DeweqlWjrNH1GVsTXtYpldo8Ae8'
            }
        };
        const movieListElement = document.querySelector('movie-list');

        return fetch(`${baseUrl}/movie/now_playing?api_key=${apiKEY}`, options)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return movieListElement.results = responseJson.results;
        });
    }
    static searchMovieItems = (searchInput) => {
        const baseUrlSearch = 'https://api.themoviedb.org/3/search/movie';
        const apiKEY = '28f88820a5654426f45057953acc8ea2';
        const movieListElement = document.querySelector('movie-list');

        return fetch(`${baseUrlSearch}?query=${searchInput}&api_key=${apiKEY}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return movieListElement.results = responseJson.results;
            });
    }
}

export default DataSource;