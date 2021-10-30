import { reducersState } from '.';
import { ITodoListActions, TodoListTypes } from '../../types/todoListIt2';
export interface todoListState {
  todoList: any[] //! ANY
};

const initialState:todoListState = {
  todoList: []
};

export const todoListUpdateReducer = (state:todoListState = initialState, action: ITodoListActions) => {
  switch(action.type) {
    case TodoListTypes.FETCH_TODO_LIST:      
    return {
        ...state, todoList: [...action.payload, ...state.todoList]
      };

    case TodoListTypes.ADD_LIST_ITEM:
      return {
        ...state, todoList: [...state.todoList, action.payload]
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

    // case TodoListTypes.SAVE_TODO_LIST:      
    //   return {
    //     ...state, todoList: [...action.payload, ...state.todoList]
    //   };
    
    default:
      return state
  }
};

export const saveTodoList = () => async (dipatch: any, getState: any) => {
  // const todoList = getState() as reducersState ;
  const todoList = {
    id: 3,
    description: "22332",
    isInFavorite: true,
    isCompleted: false,
    isEdit: false
  }
  // console.log('222',todoList.updateTodoList.todoList);
  await fetch('http://localhost:3000/todo', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoList),
  })
  // alert('Success')
  
}