import { ITodoListActions, TodoListTypes } from '../../types/todoListIt2';
export interface todoListState {
  todoList: any[] //! ANY
};

const initialState:todoListState = {
  todoList: []
};

export const todoListUpdateReducer = (state:todoListState = initialState, action: ITodoListActions) => {
  switch(action.type) {

    case TodoListTypes.ADD_LIST_ITEM:
      return {
        ...state, todoList: [...state.todoList, action.payload]
      };

    case TodoListTypes.REMOVE_LIST_ITEM:
      const todoToRemove = [...state.todoList].filter((item) => item.id !== action.payload);
      todoToRemove.map((item, index)=> item.id = index + 1);
      return {
        ...state, todoList: todoToRemove
      };

    case TodoListTypes.INFAVORITE_LIST_ITEM:
      const todoToFavorite = [...state.todoList];    
      todoToFavorite[action.payload - 1].isInFavorite = !todoToFavorite[action.payload - 1].isInFavorite;
      return {
        ...state, todoList: todoToFavorite
      };


    case TodoListTypes.COMLETED_LIST_ITEM:
      const todoToComlete = [...state.todoList];    
      todoToComlete[action.payload - 1].isCompleted = !todoToComlete[action.payload - 1].isCompleted;
      return {
        ...state, todoList: todoToComlete
      };

    // case TodoListTypes.SAVE_TODO_LIST:      
    //   return {
    //     ...state, todoList: [...action.payload, ...state.todoList]
    //   };
    case TodoListTypes.FETCH_TODO_LIST:      
      return {
        ...state, todoList: [...action.payload, ...state.todoList]
      };
    default:
      return state
  }
};
