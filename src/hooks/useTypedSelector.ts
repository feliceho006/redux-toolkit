import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/redux.types";

export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
