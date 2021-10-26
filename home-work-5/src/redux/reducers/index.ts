import { combineReducers } from "redux";
import { todoListReducer } from "./todoListReducer";

export const reducers = combineReducers({
  todo: todoListReducer
})

export type reducersState = ReturnType<typeof reducers>