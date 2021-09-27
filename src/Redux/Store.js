import { applyMiddleware, createStore } from "redux";
import toDosReducer from "./reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(toDosReducer, applyMiddleware(thunk));
export default store;
