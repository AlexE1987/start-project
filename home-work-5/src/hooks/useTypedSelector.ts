import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducersState } from "../redux/reducers";


export const useTypedSelector: TypedUseSelectorHook<reducersState> = useSelector