import './TodoList.css';

import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchTodoList } from '../../redux/actions/todoList';

import TodoInput from './TodoInput/TodoInput';

const TodoList: FC = () => {

const {todoList, error, loading} = useTypedSelector((store) => store.todo);
const dispatch = useDispatch();

useEffect(()=> {
dispatch(fetchTodoList())
},[dispatch]);

  if(loading) {
    return <h1>Loading...</h1>
  };

  if(error) {
    return <h1>{error}</h1>
  };

  return (
    <div className="todo-list__wrapper">
      <div className="todo-list__container">
        <h3>Todo List</h3>
        <TodoInput />
        <ul className="todo-list">
          {todoList.map(listItem =>
          <li className="list-item" key={listItem.id}>{listItem.description}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
