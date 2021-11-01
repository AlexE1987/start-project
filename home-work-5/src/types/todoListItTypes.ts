export interface IlistItem {
  id: number,
  description: string,
  isInFavorite: boolean,
  isCompleted: boolean,
  isEdit: boolean,
  creationDate: string,
};

export enum TodoListTypes {
  ADD_LIST_ITEM = 'ADD_LIST_ITEM',
  REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM',
  INFAVORITE_LIST_ITEM = 'INFAVORITE_LIST_ITEM',
  COMLETED_LIST_ITEM = 'COMLETED_LIST_ITEM',
  EDIT_LIST_ITEM = 'EDIT_LIST_ITEM',
  UPDATE_DESCRIPTION_LIST_ITEM = 'UPDATE_DESCRIPTION_LIST_ITEM',
  FETCH_TODO_LIST = 'FETCH_TODO_LIST',
  SHOW_TODO_LIST_All = 'SHOW_TODO_LIST_All',
  SHOW_TODO_LIST_COMPLETED = 'SHOW_TODO_LIST_COMPLETED',
  SHOW_TODO_LIST_UNCOMPLETED = 'SHOW_TODO_LIST_UNCOMPLETED',
  SHOW_TODO_LIST_FAVORITE = 'SHOW_TODO_LIST_FAVORITE',
};
interface IAddListItem {
  type: TodoListTypes.ADD_LIST_ITEM,
  payload: IlistItem,
};
interface IRemoveListItem {
  type: TodoListTypes.REMOVE_LIST_ITEM,
  payload: number
};
interface IInFavorite {
  type: TodoListTypes.INFAVORITE_LIST_ITEM,
  payload: number
};
interface ICompletedListItem {
  type: TodoListTypes.COMLETED_LIST_ITEM,
  payload: number
};
interface IEditListItem {
  type: TodoListTypes.EDIT_LIST_ITEM,
  payload: number
};

interface IUpdateDescriptionListItem {
  type: TodoListTypes.UPDATE_DESCRIPTION_LIST_ITEM,
  payload: any[] //! TYPE IT
};
interface IFetchTodoList {
  type: TodoListTypes.FETCH_TODO_LIST,
  payload: any[] //! TYPE IT
};

interface IShowTodoListALL {
  type: TodoListTypes.SHOW_TODO_LIST_All,
};
interface IShowTodoListComleted {
  type: TodoListTypes.SHOW_TODO_LIST_COMPLETED,
};
interface IShowTodoListUncompleted {
  type: TodoListTypes.SHOW_TODO_LIST_UNCOMPLETED,
};
interface IShowTodoListFavorite {
  type: TodoListTypes.SHOW_TODO_LIST_FAVORITE,
};

export type ITodoListActions = IAddListItem
| IRemoveListItem 
| IInFavorite 
| ICompletedListItem 
| IEditListItem 
| IFetchTodoList 
| IUpdateDescriptionListItem
| IShowTodoListALL
| IShowTodoListComleted
| IShowTodoListUncompleted
| IShowTodoListFavorite


