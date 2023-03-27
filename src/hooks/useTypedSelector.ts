import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/combinedReducers";

export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
