import './TodoList.css';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IlistItem } from '../../types/todoListIt2';
import { addListItem, fetchTodoList } from '../../redux/actions/todoListActions';
import { postData } from '../../api/todoListApi';

import TodoItem from './TodoItem/TodoItem';
import TodoInput from './TodoInput/TodoInput';

const TodoList: FC = () => {
const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(fetchTodoList())
  },[dispatch])

const onAddListItem = async (listItem: IlistItem) => {
  const newId = Math.max(...todoList.map((todoItem) => todoItem.id)) + 1;
  listItem.id = newId;
  dispatch(addListItem(listItem));
  postData(listItem)
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
