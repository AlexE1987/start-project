import './TodoItem.css';
import React, {FC} from 'react';

const TodoItemButton: FC = () => {
  return (
    <button className="todo-button_item">
     <img className="img-menu" src="/icons/menu.ico" alt="list-item menu" />
    </button>
  )
}

export default TodoItemButton
