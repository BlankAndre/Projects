import HomeController from '../controllers/homeControler';
class ApiService {

    constructor(){
        this.homeController = new HomeController();
    }
    
    async searchTheMovie(movieName){//async
        try {
            const response = homeController.getSearchType()
             ? await fetch(`http://www.omdbapi.com/?apikey=3e7a739b&t=${movieName}`)
              : await fetch(`http://www.omdbapi.com/?apikey=3e7a739b&i=${movieName}`);
          
            if (!response.ok) {
              throw new Error(response.Error);
            }
          
            const data = response.json();
            return data;
          
          } catch (error) {
            console.error(error);
          }
    }
/*
    async searchById(movieName){//async
        const response = await  fetch (`http://www.omdbapi.com/?apikey=3e7a739b&i=${movieName}`);
        try{
            if(!response.Response ){//a resposta e sempre ok mesmo em erros
                throw new Error(response.Error);
            }
            return response.json;
            
        }catch(error) {
            console.error(error);
        }
    }
    */

}