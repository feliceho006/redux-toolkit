import { RepositoriesState } from "./repoReducer.types";

export const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
  test: false,
};
