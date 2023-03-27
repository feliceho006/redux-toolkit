import { combineReducers } from "redux";
import repoReducer from "./repositorySlice";

const reducers = combineReducers({
  repositories: repoReducer,
});

export default reducers;
