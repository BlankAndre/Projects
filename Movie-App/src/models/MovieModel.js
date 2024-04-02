class MovieModel {
    constructor(){//acho que devia mudar o array fora do construtor
      errorMessage: '';
    }
    movies = {
      isFavourite: false,
      hasSeenIt: false,
    }
    //movies = [];
    validateMovieData(movieName) {
      this.setState({errorMessage: ''});
      try {
        if (this.movies.length >= 100) {
          this.setState({errorMessage: 'Max number of movies reached'});
          throw new Error('Limit  of movies reached');
        }
        if(!movieName.title ||!movieName.IMDBId){
          this.setState({errorMessage:'Incorrect name or id'});
          throw new Error( 'Invalid movie name or id')
        }
        for(const movie of this.movies){
          if(movie.imdbID === movieName.imdbID){
            this.setState({errorMessage:'Movie already in the list'});
            throw new Error('This movies is already present in the list');

          }
        }
        return true;
  
      }catch(error){
        console.log('temp');
        return false;
      }
    }

    changeMovieFavorite(movieName){//feito
      const movieIndex = movies.findIndex(movie => movie.imdbID === movieName);
      if (movieIndex !== -1) {
        const updatedMovies = [... this.state.movies];
        updatedMovies.isFavourite = !updatedMovies[movieIndex].isFavourite
        this.setState({movies : updatedMovies})
      }
    }

    changeMovieViewed(movieName){//feito
      const movieIndex = movies.findIndex(movie => movie.imdbID === movieName);
      if (movieIndex !== -1) {
        const updatedMovies = [... this.state.movies];
        updatedMovies.hasSeenIt = !updatedMovies[movieIndex].hasSeenIt
        this.setState({movies : updatedMovies})
      }
    }


    //tenho isto no notepad mais ou menos pensado vai ver se precisas
              //favorite e hasSeenIt 
    addMovie(movieName){
      this.validateMovieData(movieName)
      ? this.setState(prevState =>({
        movies:[... prevState.movies, movieName]
      }))//o problema com os testes e pq desta de fazer
      :console.log('The validation has failed')};; 
    

    removeMovie(movieName) {
      /*isto vai dar pq eu so faco display ou titulo e etc 
      o resto simplesmente nao vai aparecer na html */
      const movieIndex = movies.findIndex(movie => movie.imdbID === movieName);
        if (movieIndex > -1) {
          this.setState(prevState => {
            const newMovies = [...prevState.movies];
            newMovies.splice(index, 1);
            return {
              movies: newMovies
            };
          });
       }
    }

    /*
  fetchMoviesFromService(movieName){
  //pedir ao Service com os filmes 
  }
    */

}

export default MovieModel;