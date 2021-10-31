import './TodoList.css';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IlistItem } from '../../types/todoListIt2';
import { addListItem, fetchTodoList } from '../../redux/actions/todoListActions';
import { postData } from '../../api/todoListApi';

import TodoItem from './TodoItem/TodoItem';
import TodoInput from './TodoInput/TodoInput';
import TodoFilter from './TodoFilter/TodoFilter';

const TodoList: FC = () => {
  const todoListInit = useTypedSelector((store) => store.updateTodoList.todoList);
  const [todoList, setTodoList] = useState<any []>([]);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>  {
    setTodoList(todoListInit);
  },[todoListInit]);


  useEffect(()=> {
    dispatch(fetchTodoList());
  },[dispatch]);

  const onAddListItem = async (listItem: IlistItem) => {
    const newId = Math.max(...todoList.map((todoItem) => todoItem.id)) + 1;
    listItem.id = newId;
    dispatch(addListItem(listItem));
    postData(listItem)
  };

  const filterCompleted = () => {
    const forCompletedTodo = [...todoListInit];
    const completedTodo = forCompletedTodo.filter((item) => item.isCompleted === true);
    setTodoList(completedTodo);
    setFilter('Completed');
  };

  const filterUncompleted = () => {
    const forUncompletedTodo = [...todoListInit];
    const uncompletedTodo = forUncompletedTodo.filter((item) => item.isCompleted === false);
    setTodoList(uncompletedTodo);
    setFilter('Uncompleted');
  };

  const filterFavorite = () => {
    const forFavoriteTodo = [...todoListInit];
    const favoriteTodo = forFavoriteTodo.filter((item) => item.isInFavorite === true);
    setTodoList(favoriteTodo);
    setFilter('Favorite');
  };

  return (
    <div className="todo-list__wrapper">
      <div className="todo-list__container">
        <h3>My Todo List</h3>
        <TodoInput addListItem={onAddListItem}/>
        <TodoFilter 
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
            />)}
          </ul>
      </div>
    </div>
  )
}

export default TodoList
