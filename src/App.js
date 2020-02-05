import React, {Component} from 'react';
import Header from "./components/Header";
import MoviesGrid from "./components/MoviesGrid";
import Movie from "./model/Movie";
import Api from './model/api_info'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }

        this.getMovies().then(r => this.setState({movies: r}));
    }

    getMovies = async (movieName = -1) => {
        const movies = [];
        // No parameters
        if (movieName === -1) {
            await fetch(Api.discoverMovieEndpoint())
                .then(movie => movie.json())
                .then(allMovies => allMovies.results.map(movie => movies.push(new Movie(movie, Api.imagesPathApi))))
                .catch(error => alert('Error consuming API'))
        } else {
            await fetch(Api.findMovieEndPoint(movieName))
                .then(movie => movie.json())
                .then(allMovies => allMovies.results.map(movie => movies.push(new Movie(movie, Api.imagesPathApi))))
                .catch(error => alert('Error consuming API'))
        }
        return movies;
    }

    search = (evt) => {
        let movieName = evt.target.value
        this.getMovies(movieName !== '' ? movieName : -1).then(movies => this.setState({movies: movies}))
    }

    render() {
        return (
            <div className="App">
                <Header title={"Movies App"} search={this.search}/>
                <MoviesGrid movies={this.state.movies}/>
            </div>
        )
    }
}

export default App;
