export default {
    baseApiUrl: 'https://api.themoviedb.org/3/',
    imagesPathApi: 'http://image.tmdb.org/t/p/w500',
    api_key: '',
    discoverMovieEndpoint: function () {
        return `${this.baseApiUrl}discover/movie?primary_release_year=2010&sort_by=vote_average.desc&sort_by=popularity.desc&api_key=${this.api_key}`;
    },
    findMovieEndPoint: function (query) {
        return `${this.baseApiUrl}search/movie?api_key=${this.api_key}&query=${query}&include_adult=false`;
    }
}
