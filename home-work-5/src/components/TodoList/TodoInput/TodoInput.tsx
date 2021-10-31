import './TodoInput.css';
import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import { IlistItem } from '../../../types/todoListIt2';

interface ITodolistProps {
  addListItem(item:IlistItem): void;
};

const initialState:IlistItem = {
    id: 0,
    description: '',
    isInFavorite: false,
    isCompleted: false,
    isEdit: false,
};

const TodoInput: FC<ITodolistProps> = ({addListItem}) => {
const [newListItem, setNewListItem] = useState(initialState);
const [inputError, setInputError] = useState<string | boolean>('');

useEffect(()=> {
  validate()
})

const validate = () => {
  if (newListItem.description.trim().length > 160) {
    setInputError(`Chatacter limit exceeded by ${newListItem.description.length - 160}`);
  } 
  else {setInputError('');}
  if(newListItem.description.trim() === '') {setInputError(true)}
};

const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  setNewListItem((prevState)=> ({...prevState, description: event.target.value}));
};


const onaddListItem = () => {
  addListItem(newListItem);
  setNewListItem(initialState);
};

return (
  <div className="todo-input__wrapper">
    <div className="todo-input__container">
      <input  onChange={getInputValue}  value={newListItem.description} className="todo-input" type="text" />
      <p className="error" >{inputError}</p>
    </div>
    <button disabled={Boolean(inputError)} onClick={onaddListItem}  className="todo-button_input">ADD</button>
  </div>
)
}

export default TodoInput
