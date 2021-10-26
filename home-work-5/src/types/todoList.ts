export enum TodoListActionTypes {
  GET_TODO_LIST = 'GET_TODO_LIST', 
  GET_TODO_LIST_SUCCESS = 'GET_TODO_LIST_SUCCESS',
  GET_TODO_LIST_ERROR = 'GET_TODO_LIST_ERROR',
};

interface IGetTodoListAction {
  type: TodoListActionTypes.GET_TODO_LIST,
};
interface IGetTodoListSuccessAction {
  type: TodoListActionTypes.GET_TODO_LIST_SUCCESS,
  payload: any[] //! Generic!!!
};
interface IGetTodoListErrorAction {
  type: TodoListActionTypes.GET_TODO_LIST_ERROR,
  payload: string,
};

export type ITodoListActions = IGetTodoListAction | IGetTodoListSuccessAction | IGetTodoListErrorAction;

export interface ITodoListState {
  todoList: any[] //! Generic!!!;
  loading: boolean;
  error: null | string
};