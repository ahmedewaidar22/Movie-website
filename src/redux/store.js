import { applyMiddleware, createStore } from "redux";
import AllReducers from "./AllReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    AllReducers,composeWithDevTools(applyMiddleware(thunk)));
export default store;
