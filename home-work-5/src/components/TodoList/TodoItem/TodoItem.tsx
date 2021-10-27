import './TodoItem.css';
import React, {FC} from 'react';
import TodoItemButton from './TodoItemButton';

type ITodoItemContainerProps = {
  description: string,
}

const TodoItem: FC<ITodoItemContainerProps> = ({description}) => {
  return (
    <li className="todo-item">
      <img className="img-complete" src="/icons/completed.ico" alt="Comleted" />
      {description}
      <img className="img-favorite" src="/icons/star.ico" alt="In favorite" />
      <TodoItemButton/>
    </li>
  )
}

export default TodoItem
