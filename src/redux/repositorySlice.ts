import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
// import { RepositoriesState } from "./repoReducer.types";

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    searchRepositories(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    searchRepositoriesSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    searchRepositoriesError(state, action) {
      state.loading = true;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export default repoSlice.reducer;

export const {
  searchRepositories,
  searchRepositoriesSuccess,
  searchRepositoriesError,
} = repoSlice.actions;
