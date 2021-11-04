import '../TodoItem.css';
import React, {FC} from 'react';

interface ITodoItemButtonProps {
  toggleModalMenu: () => void,
}

const TodoItemButton: FC<ITodoItemButtonProps> = ({toggleModalMenu}) => {
  return (
    <button onClick={toggleModalMenu} className="todo-button_item">
     <img className="img-menu" src="/icons/menu.ico" alt="list-item menu" />
    </button>
  )
}

export default TodoItemButton
