import MovieModel from "../models/movieModel";

const setState = jest.fn();
const movieModel = new MovieModel();
/*
const goodMovieExample = {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "Rated": "PG",
    "Released": "25 May 1977",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
    "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 6 Oscars. 67 wins & 31 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "93%"
        },
        {
            "Source": "Metacritic",
            "Value": "90/100"
        }
    ],
    "Metascore": "90",
    "imdbRating": "8.6",
    "imdbVotes": "1,442,969",
    "imdbID": "tt0076759",
    "Type": "movie",
    "DVD": "10 Oct 2016",
    "BoxOffice": "$460,998,507",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
};
*/
const goodMovieExample = 'Starwars';
const badMovieExample = '';
movieModel.setState = setState;

test('addMovies should add a movie', ()=>{

    movieModel.addMovie(goodMovieExample);

    expect(setState).toHaveBeenCalledWith({
        movies: [goodMovieExample],
        errorMessage:'',
    })
})

test('addMovies and validateMovies should prevent repetions',()=>{
    movieModel.addMovie(goodMovieExample);
    expect(setState).toHaveBeenCalledWith({
        movies:[goodMovieExample],
        errorMessage:'Movie already in the list',

    })
})

test('addMovies sets an error message when the data is invalid',()=>{

    movieModel.addMovie(badMovieExample);
    
    expect(setState).toHaveBeenCalledWith({
        errorMessage: 'Error adding the movie',
    })
})