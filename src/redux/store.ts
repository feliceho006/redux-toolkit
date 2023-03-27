import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./combinedReducers";
// import repoReducers from "./reducers";

export const store = createStore(reducers, applyMiddleware(thunk));
