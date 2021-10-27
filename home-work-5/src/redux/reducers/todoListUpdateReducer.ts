
// import { IlistItem } from "../../types/todoListItem"
import { Action } from "../actions/todoList"

// interface IlistItem {
//   id: string | number,
//   description: string,
//   isInFavorite: boolean,
//   isComleted: boolean
// };


// interface ITodoListItemS {
//   todoList: IlistItem[]
// }

// const initialState = {
//   todoList: [ {
//     id: 3,
//     description: 'hello',
//     isInFavorite: false,
//     isComleted: false
//   }]
// }

export interface todoListState {
  todoList: any[] //! ANY
}

const initialState:todoListState = {
  todoList: []
}

export const todoListUpdateReducer = (state:todoListState = initialState, action: Action) => {
  switch(action.type) {
    case 'ADD_LIST_ITEM':
      return {
        ...state, todoList: [...state.todoList, action.payload]
      }
    default:
      return state
  }
}