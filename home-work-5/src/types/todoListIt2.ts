export enum TodoListTypes {
  ADD_LIST_ITEM = 'ADD_LIST_ITEM',
  REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM',
  INFAVORITE_LIST_ITEM = 'INFAVORITE_LIST_ITEM',
  COMLETED_LIST_ITEM = 'COMLETED_LIST_ITEM',
  EDIT_LIST_ITEM = 'INFAVORITE_LIST_ITEM',
  SAVE_TODO_LIST = 'SAVE_TODO_LIST',
  FETCH_TODO_LIST = 'FETCH_TODO_LIST',
};
interface IAddListItem {
  type: TodoListTypes.ADD_LIST_ITEM,
  payload: IlistItem,
};
interface IRemoveListItem {
  type: TodoListTypes.REMOVE_LIST_ITEM,
  payload: number
}
interface IInFavorite {
  type: TodoListTypes.INFAVORITE_LIST_ITEM,
  payload: number //! TYPE IT
}

interface ICompletedListItem {
  type: TodoListTypes.COMLETED_LIST_ITEM,
  payload: number
}
interface ISaveTodoList {
  type: TodoListTypes.SAVE_TODO_LIST,
  payload: any[] //! TYPE IT
}
interface IFetchTodoList {
  type: TodoListTypes.FETCH_TODO_LIST,
  payload: any[] //! TYPE IT
}

export type ITodoListActions = IAddListItem | IRemoveListItem | IInFavorite | ICompletedListItem | ISaveTodoList | IFetchTodoList;

export interface IlistItem {
  id: number,
  description: string,
  isInFavorite: boolean,
  isCompleted: boolean,
  isEdit: boolean
};
