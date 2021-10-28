import './TodoList.css';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import TodoItem from './TodoItem/TodoItem';
import TodoInput from './TodoInput/TodoInput';
import { IlistItem } from '../../types/todoListIt2';
import { addListItem } from '../../redux/actions/todoList';

const TodoList: FC = () => {
const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
const dispatch = useDispatch();

const onAddListItem = (listItem: IlistItem) => {
  listItem.id = todoList.length + 1;
  dispatch(addListItem(listItem));
};


  return (
    <div className="todo-list__wrapper">
      <div className="todo-list__container">
        <h3>My Todo List</h3>
        <TodoInput addListItem={onAddListItem}/>

          <ul className="todo-list">
            {todoList.map((listItem) => 
            <TodoItem 
            key={listItem.id}
            id={listItem.id}
            description={listItem.description}          
            />)}
          </ul>

      </div>
    </div>
  )

}

export default TodoList
