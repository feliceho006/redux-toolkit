import { RootState } from "./redux.types";

export const selectRepo = (state: RootState) => state.repositories;
