const initialState={

    fav:[]
}

const initialMovies={
    movie:[]
}
export const GetMovies = (state=initialMovies,action)=>{

    switch(action.type){
        case"getMovies":
            return{
                movie:action.payload
            }
        default:
            return state;

    }   

}


export const favoritesReducer=(state=initialState,action)=>{

    switch(action.type){
        case "ADD":
            return{
                fav:[...state.fav,action.payload]
            }
        case "REMOVE":
            return{

                fav:state.fav.filter(i=>i !==action.payload)
            }
        default:
            return state;


    }



}