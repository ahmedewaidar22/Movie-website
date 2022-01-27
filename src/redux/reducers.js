const initialState={

    fav:[]
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