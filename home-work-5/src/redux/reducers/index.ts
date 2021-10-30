import { combineReducers } from "redux";
import { todoListUpdateReducer } from "./todoListReducer";

export const rootReducer = combineReducers({
  // todo: todoListReducer,
  updateTodoList: todoListUpdateReducer,
});

export type reducersState = ReturnType<typeof rootReducer>