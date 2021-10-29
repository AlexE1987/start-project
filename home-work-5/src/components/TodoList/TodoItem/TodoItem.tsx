import './TodoItem.css';
import React, {FC, useState} from 'react';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, isComletedListItem, removeListItem } from '../../../redux/actions/todoList';

type ITodoItemProps = {
  id: number,
  description: string,
  isCompleted: boolean,
  isInFavorite: boolean,
}

const TodoItem: FC<ITodoItemProps> = ({description, id, isCompleted, isInFavorite}) => {
  const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    dispatch(removeListItem(id))
  };

  // const toComplete = (id: number) => {
    
  //   dispatch(isComletedListItem(id))
  // }
  const toComplete = (id: number) => {
    // const newTodo = [...todoList];    
    // newTodo[id-1].isCompleted = !isCompleted; 
    dispatch(isComletedListItem(id))
  }

  const toFavorite = (id: number) => {
    // const newTodo2 = [...todoList];    
    // newTodo2[id-1].isInFavorite = !isInFavorite;
    dispatch(inFavoriteListItem(id))
  };
  
  return (
    <li  className="todo-item">
      {isCompleted &&  
      <img  className="img-complete" src="/icons/completed.ico" alt="Comleted" 
      />}

      {description}      

      {isInFavorite && 
      <img onClick={()=>toFavorite(id)} className="img-favorite" src="/icons/star.ico" alt="In favorite" 
      />}

      <TodoItemButton/>
      <TodoItemMenu //!PORTAL
        id={id}
        removeItem={()=>removeItem(id)} 
        toFavorite={()=>toFavorite(id)}
        toComplete={()=>toComplete(id)}
       />
    </li>
  )
}

export default TodoItem
