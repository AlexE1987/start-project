import './TodoList.css';

import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchTodoList } from '../../redux/actions/todoList';

import TodoInputContainer from './TodoInput/TodoInputContainer';
import TodoItem from './TodoItem/TodoItem';

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
        <h3>My Todo List</h3>
        <TodoInputContainer />
        <ul className="todo-list">

          {todoList.map((listItem) => 
          <TodoItem 
          key={listItem.id}
          description={listItem.description}/>
          )}

        </ul>
      </div>
    </div>
  )
}

export default TodoList
