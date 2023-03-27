import { configureStore } from "@reduxjs/toolkit";
import reducers from "./combinedReducers";
// import repoReducers from "./reducers";

// @felice: we don't need to import and set thunk in as middleware if we use configureStore as it s included as part of the default middleware included
export const store = configureStore({ reducer: reducers });
