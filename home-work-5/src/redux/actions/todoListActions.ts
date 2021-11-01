import { Dispatch } from "redux"
import { IlistItem, TodoListTypes, ITodoListActions } from "../../types/todoListItTypes";

export const  fetchTodoList = () => { //! TRY/CATCH
  return async (dispatch: Dispatch<ITodoListActions>) => {
    const response = await fetch('http://localhost:3000/todo')
    .then((response) => response.json())
    .then((data)=> data)
    dispatch({type: TodoListTypes.FETCH_TODO_LIST, payload:response})
  }
}

export const addListItem = (listItem: IlistItem): ITodoListActions => ({
  type: TodoListTypes.ADD_LIST_ITEM, payload:listItem
});

export const removeListItem = (id:number):ITodoListActions => ({
  type: TodoListTypes.REMOVE_LIST_ITEM, payload:id
});

export const inFavoriteListItem = (id: number):ITodoListActions => ({
  type: TodoListTypes.INFAVORITE_LIST_ITEM, payload:id
});

export const isComletedListItem = (id: number):ITodoListActions => ({
  type: TodoListTypes.COMLETED_LIST_ITEM, payload: id
});

export const isEditListItem = (id: number):ITodoListActions => ({
  type: TodoListTypes.EDIT_LIST_ITEM, payload: id
});

export const updateDescriptionListItem = (newArray: any[] ):ITodoListActions => ({
  type: TodoListTypes.UPDATE_DESCRIPTION_LIST_ITEM, payload: newArray 
});

export const filterShowAll = ():ITodoListActions => ({
  type: TodoListTypes.SHOW_TODO_LIST_All
});
export const filterShowCompleted = ():ITodoListActions => ({
  type: TodoListTypes.SHOW_TODO_LIST_COMPLETED
});
export const filterShowUncompleted = ():ITodoListActions => ({
  type: TodoListTypes.SHOW_TODO_LIST_UNCOMPLETED
});
export const filterShowFavorite = ():ITodoListActions => ({
  type: TodoListTypes.SHOW_TODO_LIST_FAVORITE
});
