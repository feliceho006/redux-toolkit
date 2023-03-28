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
      dispatch(
        searchRepositoriesSuccess(data.objects.map((o: any) => o.package.name))
      );
    } catch (error: any) {
      dispatch(searchRepositoriesError(error.message));
    }
  };
