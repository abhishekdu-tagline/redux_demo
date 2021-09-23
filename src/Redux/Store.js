import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import toDosReducer from "./reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  toDosReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
