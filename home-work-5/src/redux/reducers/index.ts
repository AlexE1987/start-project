import { combineReducers } from "redux";
import { todoListReducer } from "./todoListReducer";

export const reducers = combineReducers({
  todoList: todoListReducer
})

type reducersState = ReturnType<typeof reducers>