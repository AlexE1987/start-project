import './TodoItem.css';
import React, {FC} from 'react';

interface ITodoItemButtonProps {
  toggleModal: () => void,
}

const TodoItemButton: FC<ITodoItemButtonProps> = ({toggleModal}) => {
  return (
    <button onClick={toggleModal} className="todo-button_item">
     <img className="img-menu" src="/icons/menu.ico" alt="list-item menu" />
    </button>
  )
}

export default TodoItemButton
