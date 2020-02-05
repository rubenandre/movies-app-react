class Movie {
    constructor(object, basePathImage) {
        this.title = object.title
        this.year = object['Year']
        this.poster = basePathImage + object['poster_path']
        this.plot =  object['overview']
    }
}

export default Movie;
