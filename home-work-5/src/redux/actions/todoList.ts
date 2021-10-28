import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk";
// import { TodoListActionTypes, ITodoListActions } from "../../types/todoList"
import { IlistItem, TodoListTypes,ITodoListActions } from "../../types/todoListIt2";
import { reducersState } from "../reducers";



export const addListItem = (listItem: IlistItem): ITodoListActions => ({
  type: TodoListTypes.ADD_LIST_ITEM, payload:listItem
});

export const removeListItem = (newList: any[]):ITodoListActions => ({
  type: TodoListTypes.REMOVE_LIST_ITEM, payload:newList
})

export const inFavoriteListItem = (newList: any[]):ITodoListActions => ({
  type: TodoListTypes.INFAVORITE_LIST_ITEM, payload:newList
})



// export const fetchTodoList = () => {
//   return async (dispatch: Dispatch<ITodoListActions>) => {
//     try {
//       dispatch({type: TodoListActionTypes.GET_TODO_LIST});
//       const response = await fetch('http://localhost:3000/todo')
//       .then((response) => response.json())
//       .then((data) => {
//       return data
//       })
//       dispatch({type: TodoListActionTypes.GET_TODO_LIST_SUCCESS, payload: response})
//     } catch (error) {
//       dispatch({type: TodoListActionTypes.GET_TODO_LIST_ERROR, payload: 'Error while downloading'});
//     }
//   }
// }

// export type Action = {type: 'ADD_LIST_ITEM', payload: IlistItem}