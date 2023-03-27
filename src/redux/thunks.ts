import axios from "axios";
import {
  searchRepositories,
  searchRepositoriesError,
  searchRepositoriesSuccess,
} from "./repositorySlice";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

export const getAPIData =
  (term: string | null) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(searchRepositories());
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      console.log(data);
      // dispatch(searchRepositoriesSuccess(data));
    } catch (error) {}
  };
