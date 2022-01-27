import axios from "axios";
export const addToFavorites=(payload)=>{
    return{
            type:'ADD',
            payload

    };
};

export const removeToFavorites=(payload)=>{
    return{
          type:'REMOVE',
          payload
        
    };
        
};

export const getMovies = () =>(dispatch)=>{

return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9e6e68da10912cb208a480beaf066249')
.then(res=>res.data.results)
.then(res=>dispatch({type:'getMovies',payload:res})
)
.catch((err)=>{console.log(err)})


}

