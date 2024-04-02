import MovieModel from "../models/movieModel";
import ApiService from "../services/ApiService";
class homeController{
    constructor(){
        this.movieModel = new MovieModel();
        this.apiService = new ApiService();
        this.searchType = true;
    }

    getSearchType(){
        return this.searchType;
    }

    setSearchType(){//maybe change the name to changeSearch ?
        this.searchType = !this.searchType;
    }
    /*
    handleTitleSearch(){
        this.searchType = 'title';
    }
    handleIdSearch(){
        this.searchType = 'id';
    }
    */

//falta adicionar os eventListeners
/*falta tambem escrever codigo que iria fazer update a view mas ponho no model depois do add 
mandar devolta para o controller
*/
    handleMovieStatus(movieName){//refazer
        //acho que aqui ficava melhor se tivesse cada vez que eventlistener e chamado usa isto
        //tb posso alterar para o array nao ter o que e favorito so o view alterar a cor 
        //tenho que por os event listener no if isto como ta agora e sempre verdade
        if (event.type = 'favorite'){//agora tens de por e ver se da assim
            this.movieModel.changeMovieFavorite(movieName);
        }
        if (event.type = 'viewed'){
            this.movieModel.changeMovieViewed(movieName);
        }
        if (event.type = 'delete'){
            this.movieModel.removeMovie(movieName);
        }
        
    }

    handleMovieSearch(movieName){
        let result = apiService.searchTheMovie(movieName);
        this.movieModel.addMovie(result);
    }



} 