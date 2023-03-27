import { RootState } from "./combinedReducers";

export const selectRepo = (state: RootState) => state.repositories;
