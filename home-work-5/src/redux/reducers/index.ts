import { combineReducers } from "redux";
import { todoListUpdateReducer } from "./todoListReducer2";

export const rootReducer = combineReducers({
  // todo: todoListReducer,
  updateTodoList: todoListUpdateReducer,
});

export type reducersState = ReturnType<typeof rootReducer>