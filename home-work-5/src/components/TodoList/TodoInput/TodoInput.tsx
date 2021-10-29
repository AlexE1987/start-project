import './TodoInput.css';
import React, {ChangeEvent, FC, useState} from 'react';
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

const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  setNewListItem((prevState)=> ({...prevState, description: event.target.value}));
};

const onaddListItem = () => {
  addListItem(newListItem);
  setNewListItem(initialState);
};

return (
  <div className="todo-input__container">
    <input onChange={getInputValue}  value={newListItem.description} className="todo-input" type="text" />
    <button onClick={onaddListItem}  className="todo-button_input">ADD</button>
  </div>
)
}

export default TodoInput
