import './TodoItem.css';
import React, {FC, useState, KeyboardEvent, ChangeEvent } from 'react';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, isComletedListItem, isEditListItem, removeListItem, updateDescriptionListItem } from '../../../redux/actions/todoListActions';

type ITodoItemProps = {
  id: number,
  description: string,
  isCompleted: boolean,
  isInFavorite: boolean,
  isEdit: string,
}

const TodoItem: FC<ITodoItemProps> = ({id, description, isCompleted, isInFavorite, isEdit}) => {
  const [newDescription, setNewDescription] = useState(description);
  const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    dispatch(removeListItem(id));
  };

  const toComplete = (id: number) => {
    dispatch(isComletedListItem(id));
  }

  const toFavorite = (id: number) => {
    dispatch(inFavoriteListItem(id));
  };

  const toEdit = (id: number) => {
    dispatch(isEditListItem(id));
  }

  const getEditValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const onEditKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const updatedDescriptionTodo = [...todoList]
    if (event.code === "Enter") {
      updatedDescriptionTodo[id-1].description = newDescription;
      dispatch(updateDescriptionListItem(updatedDescriptionTodo));
      dispatch(isEditListItem(id));
    }
  };

  return (
    <li  className="todo-item">
      {isCompleted &&  
      <img onClick={()=>toComplete(id)} className="img-complete" src="/icons/completed.ico" alt="Comleted" 
      />}
      {isEdit 
        ? <input onKeyDown={onEditKeyDown} value={newDescription} onChange={getEditValue} autoFocus type="text" />
        : <p>{description}</p>
      }

      {isInFavorite && 
      <img onClick={()=>toFavorite(id)} className="img-favorite" src="/icons/star.ico" alt="In favorite" 
      />}

      <TodoItemButton/>
      <TodoItemMenu //!PORTAL
        id={id}
        removeItem={()=>removeItem(id)} 
        toFavorite={()=>toFavorite(id)}
        toComplete={()=>toComplete(id)}
        toEdit={()=>toEdit(id)}
       />
    </li>
  )
}

export default TodoItem
