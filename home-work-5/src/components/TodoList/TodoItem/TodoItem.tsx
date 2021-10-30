import './TodoItem.css';
import {FC, useState, KeyboardEvent, ChangeEvent } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, isComletedListItem, isEditListItem, removeListItem, updateDescriptionListItem } from '../../../redux/actions/todoListActions';
import { sendData } from '../../../api/todoListApi';
import { dataToSend } from '../../../helpers/todoListHelpers';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';

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

  const removeItem = async (id: number) => {
    dispatch(removeListItem(id));
    await fetch(`http://localhost:3000/todo/${id}`, {
         method: 'DELETE'
       })
  };

  const toComplete = async (id: number) => {
    dispatch(isComletedListItem(id));
    sendData(id, dataToSend(id, todoList));
  }

  const toFavorite = (id: number) => {
    dispatch(inFavoriteListItem(id));
    sendData(id, dataToSend(id, todoList));
  };

  const toEdit = (id: number) => {
    dispatch(isEditListItem(id));
  }

  const getEditValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const onEditKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const updatedDescriptionTodo = [...todoList]
    const index = updatedDescriptionTodo.findIndex((item) => item.id === id)
    if (event.code === "Enter") {
      updatedDescriptionTodo[index].description = newDescription;
      dispatch(updateDescriptionListItem(updatedDescriptionTodo));
      dispatch(isEditListItem(id));
      sendData(id, dataToSend(id, todoList));
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
