import { combineReducers } from "redux";
import{favoritesReducer,GetMovies} from './reducers';
export default combineReducers({
    fav:favoritesReducer,
    movies:GetMovies

})