import './TodoItem.css';
import {FC, useState, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { inFavoriteListItem, isComletedListItem, isEditListItem, removeListItem, updateDescriptionListItem } from '../../../redux/actions/todoListActions';
import { putData } from '../../../api/todoListApi';
import { dataToSend } from '../../../helpers/todoListHelpers';
import TodoItemButton from './TodoItemButton';
import TodoItemMenu from '../TodoItemMenu/TodoItemMenu';
import ModalMenuTodo from '../../Modal/ModalMenuTodo';

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
  const [hideModal, setHideModal] = useState(true);

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

  const toggleModal = ():void => {
    setHideModal(!hideModal)
  }

  const removeItem = async (id: number) => {
    dispatch(removeListItem(id));
    await fetch(`http://localhost:3000/todo/${id}`, {
         method: 'DELETE'
       });
       
  };

  const toComplete = async (id: number) => {
    dispatch(isComletedListItem(id));
    putData(id, dataToSend(id, todoList));
    setHideModal(true);
  };

  const toFavorite = (id: number) => {
    dispatch(inFavoriteListItem(id));
    putData(id, dataToSend(id, todoList));
    setHideModal(true);
  };

  const toEdit = (id: number) => {
    dispatch(isEditListItem(id));
    setHideModal(true);
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

      <TodoItemButton toggleModal={toggleModal}/> 
      {/* Click  */}

      <ModalMenuTodo hideModal={hideModal} toggleModal={toggleModal}>
        <TodoItemMenu
          id={id}
          hideModal={hideModal}
          removeItem={()=>removeItem(id)} 
          toFavorite={()=>toFavorite(id)}
          toComplete={()=>toComplete(id)}
          toEdit={()=>toEdit(id)}
          />
      </ModalMenuTodo>

    </li>
  )
}

export default TodoItem
