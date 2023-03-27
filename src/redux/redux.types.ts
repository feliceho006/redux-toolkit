import {
  CombinedState,
  Store,
  AnyAction as ReduxAnyAction,
} from "@reduxjs/toolkit";
import reducers from "./combinedReducers";

export type RootState = ReturnType<typeof reducers>;

export type RootStore = Store<CombinedState<RootState>, ReduxAnyAction>;
