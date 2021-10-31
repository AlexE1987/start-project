import './TodoItem.css';
import {FC, useState, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, isComletedListItem, isEditListItem, removeListItem, updateDescriptionListItem } from '../../../redux/actions/todoListActions';
import { putData } from '../../../api/todoListApi';
import { dataToSend } from '../../../helpers/todoListHelpers';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';
import ModalMenuTodo from '../../Modal/ModalMenuTodo/ModalMenuTodo';
import ModalRemove from '../../Modal/ModalRemove/ModalRemove';

type ITodoItemProps = {
  id: number,
  description: string,
  isCompleted: boolean,
  isInFavorite: boolean,
  isEdit: string,
}

const TodoItem: FC<ITodoItemProps> = ({id, description, isCompleted, isInFavorite, isEdit}) => {
  const [newDescription, setNewDescription] = useState(description);
  const [inputError, setInputError] = useState<string | boolean>('');
  const [hideModalMenu, setHideModalMenu] = useState(true);
  const [hideModalRemove, setHideModalRemove] = useState(true);

  const todoList = useTypedSelector((store) => store.updateTodoList.todoList);
  const dispatch = useDispatch();
  
  useEffect(()=> {validate()});

  const validate = () => {
    if (newDescription.trim().length > 160) {
      setInputError(`Chatacter limit exceeded by ${newDescription.length - 160}`);
    } 
    else {setInputError('');}
    if(newDescription.trim() === '') {setInputError(true)}
  };

  const toggleModalMenu = ():void => {
    setHideModalMenu(!hideModalMenu)
  };

  const toggleModalRemove = ():void => {
    setHideModalRemove(!hideModalRemove)
  };

  const removeItem = async (id: number) => { //! REMOVE Reques to API
    dispatch(removeListItem(id));
    await fetch(`http://localhost:3000/todo/${id}`, {
         method: 'DELETE'
       });
       
  };

  const toComplete = async (id: number) => {
    dispatch(isComletedListItem(id));
    putData(id, dataToSend(id, todoList));
    setHideModalMenu(true);
  };

  const toFavorite = (id: number) => {
    dispatch(inFavoriteListItem(id));
    putData(id, dataToSend(id, todoList));
    setHideModalMenu(true);
  };

  const toEdit = (id: number) => {
    dispatch(isEditListItem(id));
    setHideModalMenu(true);
  };

  const getEditValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const onEditKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(Boolean(inputError)) {return}
    const updatedDescriptionTodo = [...todoList]
    const index = updatedDescriptionTodo.findIndex((item) => item.id === id)
    if (event.code === "Enter") {
      updatedDescriptionTodo[index].description = newDescription;
      dispatch(updateDescriptionListItem(updatedDescriptionTodo));
      dispatch(isEditListItem(id));
      putData(id, dataToSend(id, todoList));
    }
  };

  return (
    <li  className="todo-item">
      {isCompleted &&  
      <img onClick={()=>toComplete(id)} className="img-complete" src="/icons/completed.ico" alt="Comleted" 
      />}

      {isEdit 
        ? <div>
            <input 
            autoFocus
            onBlur={() => dispatch(isEditListItem(id))}
            onKeyDown={onEditKeyDown} 
            value={newDescription} 
            onChange={getEditValue} 
            type="text" 
            />
            <p>{inputError}</p>
          </div>
        : <p>{description}</p>
      }

      {isInFavorite && 
      <img onClick={()=>toFavorite(id)} className="img-favorite" src="/icons/star.ico" alt="In favorite" 
      />}

      <TodoItemButton toggleModalMenu={toggleModalMenu}/> 

      <ModalMenuTodo hideModalMenu={hideModalMenu} toggleModalMenu={toggleModalMenu}>
        <TodoItemMenu
          id={id}
          hideModalMenu={hideModalMenu}
          toFavorite={()=>toFavorite(id)}
          toComplete={()=>toComplete(id)}
          toEdit={()=>toEdit(id)}
          toggleModalRemove={toggleModalRemove}
          />
      </ModalMenuTodo>
      <ModalRemove 
          id={id}
          description={description}
          hideModalRemove={hideModalRemove} 
          toggleModalRemove={toggleModalRemove}
          removeItem={()=>removeItem(id)}
          />
    </li>
  )
}

export default TodoItem
