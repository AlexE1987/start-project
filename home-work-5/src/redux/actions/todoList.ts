import { Dispatch } from "redux"
import { TodoListActionTypes, ITodoListActions } from "../../types/todoList"
import { IlistItem } from "../../types/todoListItem";

export const fetchTodoList = () => {
  return async (dispatch: Dispatch<ITodoListActions>) => {
    try {
      dispatch({type: TodoListActionTypes.GET_TODO_LIST});
      const response = await fetch('http://localhost:3000/todo')
      .then((response) => response.json())
      .then((data) => {
      return data
      })
      dispatch({type: TodoListActionTypes.GET_TODO_LIST_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: TodoListActionTypes.GET_TODO_LIST_ERROR, payload: 'Error while downloading'});
    }
  }
}


export type Action = {type: 'ADD_LIST_ITEM', payload: IlistItem}


export const addListItem = (listItem: IlistItem): Action => ({
  type: 'ADD_LIST_ITEM', payload:listItem
})