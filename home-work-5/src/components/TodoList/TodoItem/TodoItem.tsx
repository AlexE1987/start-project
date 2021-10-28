import './TodoItem.css';
import React, {FC, useState} from 'react';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, removeListItem } from '../../../redux/actions/todoList';

type ITodoItemProps = {
  id: number,
  description: string,
}

const TodoItem: FC<ITodoItemProps> = ({description, id}) => {
  const [isInFavorite, setIsInFavorite] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    let newTodo = [...todoList];
    newTodo = newTodo.filter((item => item.id !== id))
    newTodo.map((item, index)=> item.id = index + 1)
    dispatch(removeListItem(newTodo))
  };

  const toFavorite = (id: number) => {
    let newTodo = [...todoList];    
    newTodo[id-1].isInFavorite = !isInFavorite; 
    setIsInFavorite(!isInFavorite)
    dispatch(inFavoriteListItem(newTodo))
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
       />
    </li>
  )
}

export default TodoItem
