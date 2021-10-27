export enum TodoListActionTypes {
  GET_TODO_LIST = 'GET_TODO_LIST', 
  GET_TODO_LIST_SUCCESS = 'GET_TODO_LIST_SUCCESS',
  GET_TODO_LIST_ERROR = 'GET_TODO_LIST_ERROR',
  UPDATE_TODO_LIST = 'UPDATE_TODO_LIST',
};
interface IGetTodoListAction {
  type: TodoListActionTypes.GET_TODO_LIST,
};
interface IGetTodoListSuccessAction {
  type: TodoListActionTypes.GET_TODO_LIST_SUCCESS,
  payload: any[] //! Generic or Types Object!!!
};
interface IGetTodoListErrorAction {
  type: TodoListActionTypes.GET_TODO_LIST_ERROR,
  payload: string,
};
interface IUpdateTodoListAction {
  type: TodoListActionTypes.UPDATE_TODO_LIST,
  payload: any[] //! Generic or Types Object!!!
}

export type ITodoListActions = IGetTodoListAction | IGetTodoListSuccessAction | IGetTodoListErrorAction | IUpdateTodoListAction;

export interface ITodoListState {
  todoList: any[] //! Generic or Types Object!!!;
  loading: boolean;
  error: null | string
};