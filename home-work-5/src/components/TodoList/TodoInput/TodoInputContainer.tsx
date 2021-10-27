import './TodoInputContainer.css';
import React, {FC} from 'react';
import TodoInput from './TodoInput';
import TodoInputButton from './TodoInputButton';




const TodoInputContainer: FC = () => {



  return (
    <div className="todo-input__container">
      <TodoInput/>
      <TodoInputButton/>
    </div>
  )
}

export default TodoInputContainer
