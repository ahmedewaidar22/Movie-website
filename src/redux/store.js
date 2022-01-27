import { createStore } from "redux";
import{favoritesReducer}from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    favoritesReducer,composeWithDevTools());
export default store;
