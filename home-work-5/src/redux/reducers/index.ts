import { combineReducers } from "redux";
import { todoListReducer } from "./todoListReducer";
import { todoListUpdateReducer } from "./todoListUpdateReducer";

export const reducers = combineReducers({
  todo: todoListReducer,
  updateTodo: todoListUpdateReducer,
})

export type reducersState = ReturnType<typeof reducers>