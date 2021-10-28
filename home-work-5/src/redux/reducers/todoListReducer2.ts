import { ITodoListActions, TodoListTypes } from '../../types/todoListIt2';
export interface todoListState {
  todoList: any[] //! ANY
};

const initialState:todoListState = {
  todoList: []
};

export const todoListUpdateReducer = (state:todoListState = initialState, action: ITodoListActions) => {
  switch(action.type) {
    case TodoListTypes.ADD_LIST_ITEM :
      return {
        ...state, todoList: [...state.todoList, action.payload]
      };
    case TodoListTypes.REMOVE_LIST_ITEM:
      return {
        ...state, todoList: action.payload
      };
    case TodoListTypes.INFAVORITE_LIST_ITEM:      
      return {
        ...state, todoList: action.payload
      };
    case TodoListTypes.FETCH_TODO_LIST:      
      return {
        ...state, todoList: [...action.payload, ...state.todoList]
      };
    default:
      return state
  }
};
