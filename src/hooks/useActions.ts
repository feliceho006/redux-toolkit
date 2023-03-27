import { useDispatch } from "react-redux";
import reducers from "../redux/combinedReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
});
export type RootDispatch = typeof store.dispatch;
export const useActions: () => RootDispatch = useDispatch;
