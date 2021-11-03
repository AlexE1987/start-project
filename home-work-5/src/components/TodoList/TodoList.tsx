import './TodoList.css';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IlistItem } from '../../types/todoListItTypes';
import { addListItem, fetchTodoList, filterShowAll,
         filterShowCompleted, filterShowFavorite,
         filterShowUncompleted } from '../../redux/actions/todoListActions';
import { postData } from '../../api/todoListApi';

import TodoItem from './TodoItem/TodoItem';
import TodoInput from './TodoInput/TodoInput';
import TodoFilter from './TodoFilter/TodoFilter';

const TodoList: FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchTodoList());
  },[dispatch]);

  const onAddListItem = async (listItem: IlistItem) => {
    if(todoList.length === 0) {
      listItem.id = 1
    } else {
      listItem.id = Math.max(...todoList.map((todoItem) => todoItem.id)) + 1;
    };
    listItem.creationDate = new Date().toLocaleDateString();
    dispatch(addListItem(listItem));
    postData(listItem)
  };

  const filterAll = () => {
    dispatch(filterShowAll())
    setActiveFilter('All')
  };
  const filterCompleted = () => {
    dispatch(filterShowCompleted())
    setActiveFilter('Completed')
  };

  const filterUncompleted = () => {
    dispatch(filterShowUncompleted())
    setActiveFilter('Uncompleted')
  };

  const filterFavorite = () => {
    dispatch(filterShowFavorite())
    setActiveFilter('Favorite')
  };
  
  return (
    <div className="todo-list__wrapper">
      <div className="todo-list__container">
        <h3>My Todo List</h3>
        <TodoInput addListItem={onAddListItem}/>
        <TodoFilter 
          activeFilter={activeFilter}
          filterAll={filterAll}
          filterCompleted={filterCompleted}
          filterUncompleted={filterUncompleted} 
          filterFavorite={filterFavorite}/>
          <ul className="todo-list">
            {todoList.map((listItem) => 
            <TodoItem 
            key={listItem.id}
            todoList={todoList}
            id={listItem.id}
            description={listItem.description}         
            isCompleted={listItem.isCompleted}         
            isInFavorite={listItem.isInFavorite}
            isEdit={listItem.isEdit}
            creationDate={listItem.creationDate}
            />)}
          </ul>
      </div>
    </div>
  )
}

export default TodoList
