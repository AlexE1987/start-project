import { ITodoListActions, TodoListTypes } from '../../types/todoListIt2';
export interface todoListState {
  todoList: any[], //! ANY
  todoListDefault: any[], //! ANY
};

const initialState:todoListState = {
  todoList: [],
  todoListDefault: [],
};

export const todoListUpdateReducer = (state:todoListState = initialState, action: ITodoListActions) => {
  switch(action.type) {
    case TodoListTypes.FETCH_TODO_LIST:      
      return {
        ...state, todoList: [...action.payload, ...state.todoList].sort((a, b) => b.id - a.id)
                ,todoListDefault: [...action.payload, ...state.todoList].sort((a, b) => b.id - a.id)
      };

    case TodoListTypes.SHOW_TODO_LIST_All:      
      return {
      ...state, todoList: [...state.todoListDefault]
      };

    case TodoListTypes.SHOW_TODO_LIST_COMPLETED:      
      return {
        ...state, todoList: [...state.todoListDefault].filter((item) => item.isCompleted === true)
      };

    case TodoListTypes.SHOW_TODO_LIST_UNCOMPLETED:      
      return {
        ...state, todoList: [...state.todoListDefault].filter((item) => item.isCompleted === false)
      };

    case TodoListTypes.SHOW_TODO_LIST_FAVORITE:
      return {
        ...state, todoList: [...state.todoListDefault]
                        .filter((item) => item.isInFavorite === true && item.isCompleted === false)
      };
    
    case TodoListTypes.ADD_LIST_ITEM:
      return {
        ...state, todoList: [action.payload, ...state.todoList]
      };

    case TodoListTypes.REMOVE_LIST_ITEM:
      const todoToRemove = [...state.todoList].filter((item) => item.id !== action.payload);
      return {
        ...state, todoList: todoToRemove
      };

    case TodoListTypes.INFAVORITE_LIST_ITEM:
      const todoToFavorite = [...state.todoList];
      let indexFavorite = todoToFavorite.findIndex((item) => item.id === action.payload);
      todoToFavorite[indexFavorite].isInFavorite = !todoToFavorite[indexFavorite].isInFavorite;
      return {
        ...state, todoList: todoToFavorite
      };

    case TodoListTypes.COMLETED_LIST_ITEM:
      const todoToComlete = [...state.todoList];
      let indexToComplete = todoToComlete.findIndex((item) => item.id === action.payload);      
      todoToComlete[indexToComplete].isCompleted = !todoToComlete[indexToComplete].isCompleted;
      return {
        ...state, todoList: todoToComlete
      };

    case TodoListTypes.EDIT_LIST_ITEM:
      const todoToEdit = [...state.todoList];
      let indexToEdit = todoToEdit.findIndex((item) => item.id === action.payload);
      todoToEdit[indexToEdit].isEdit = !todoToEdit[indexToEdit].isEdit;
      return {
        ...state, todoList: todoToEdit
      };
    
    case TodoListTypes.UPDATE_DESCRIPTION_LIST_ITEM:
      return {
        ...state, todoList: action.payload
      }

    default:
      return state
  }
};
