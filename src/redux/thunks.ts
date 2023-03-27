import axios from "axios";
import {
  searchRepositories,
  searchRepositoriesError,
  searchRepositoriesSuccess,
} from "./repositorySlice";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

export const getAPIData = (term: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(searchRepositories());

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      dispatch(searchRepositoriesSuccess(data));
    } catch (e: any) {
      dispatch(searchRepositoriesError(e.message));
    }
  };
};
