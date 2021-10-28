import './TodoItem.css';
import React, {FC} from 'react';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, removeListItem } from '../../../redux/actions/todoList';

type ITodoItemProps = {
  id: number,
  description: string,
  isInfavorite: boolean,
  isCompleted: boolean,
}

const TodoItem: FC<ITodoItemProps> = ({description, isInfavorite, isCompleted, id}) => {
  
  const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
  const dispatch = useDispatch();
  
  const removeItem = (id: number) => {
    let newTodo = [...todoList];
    newTodo = newTodo.filter((item => item.id !== id))
    dispatch(removeListItem(newTodo))
  }

  const toFavorite = (id: number) => {
    let newTodo = [...todoList];
    console.log('newtodo', newTodo[0].isInFavorite);
    
    newTodo[2].isInFavorite = true; 
    dispatch(inFavoriteListItem(newTodo))
  }
  

  return (
    <li  className="todo-item">
      {isCompleted &&  <img className="img-complete" src="/icons/completed.ico" alt="Comleted" />}
      {description}      
      {isInfavorite && <img className="img-favorite" src="/icons/star.ico" alt="In favorite" />}
      <TodoItemButton/>
      <TodoItemMenu
        id={id}
        removeItem={()=>removeItem(id)} 
        toFavorite={()=>toFavorite(id)} 
       />
    </li>
  )
}

export default TodoItem
