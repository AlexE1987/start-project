export enum TodoListTypes {
  ADD_LIST_ITEM = 'ADD_LIST_ITEM',
  REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM',
  INFAVORITE_LIST_ITEM = 'INFAVORITE_LIST_ITEM',
  SAVE_TODO_LIST = 'SAVE_TODO_LIST',
};

interface IAddListItem {
  type: TodoListTypes.ADD_LIST_ITEM,
  payload: IlistItem,
};

interface ISaveTodoList {
  type: TodoListTypes.SAVE_TODO_LIST,
  payload: any[] //! TYPE IT
}

interface IRemoveListItem {
  type: TodoListTypes.REMOVE_LIST_ITEM,
  payload: any[] //! TYPE IT
}

interface IInFavorite {
  type: TodoListTypes.INFAVORITE_LIST_ITEM,
  payload: any[] //! TYPE IT
}

export type ITodoListActions = IAddListItem | ISaveTodoList | IRemoveListItem | IInFavorite;

export interface IlistItem {
  id: number,
  description: string,
  isInFavorite: boolean,
  isComleted: boolean
};