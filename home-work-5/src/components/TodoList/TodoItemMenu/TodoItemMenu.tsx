import './TodoItemMenu.css'
import {FC} from 'react'

type ITodoMenuProps = {
  id: number,
  hideModalMenu: boolean,
  toFavorite: (id: number) =>void,
  toComplete: (id: number) =>void,
  toEdit: (id: number) =>void,
  toggleModalRemove: () => void,
}

const TodoItemMenu: FC<ITodoMenuProps> = 
({toggleModalRemove, toFavorite,toComplete , toEdit, id, hideModalMenu}) => {

  return (
     <div className={hideModalMenu ? "hide" : "item-menu_container"}>
      <button data-test-id="btn-to-favorite" onClick={() =>toFavorite(id)} className="menu-btn">
        <img className="menu-img" src="/icons/star.ico" alt="to favorites" />
        <p>To favorite</p> 
      </button>
      <button data-test-id="btn-to-complete" onClick={() =>toComplete(id)} className="menu-btn">
        <img className="menu-img" src="/icons/completed.ico" alt="to comlete" />
        <p>To completed</p> 
      </button>
      <button data-test-id="btn-to-edit" onClick={() =>toEdit(id)} className="menu-btn">
        <img className="menu-img" src="/icons/edit.svg" alt="to edit" />
        <p>To edit</p> 
      </button>
      <button data-test-id="btn-tggle-remove" onClick={toggleModalRemove} className="menu-btn">
        <img className="menu-img" src="/icons/delete.svg" alt="to delete" />
        Remove
      </button>
    </div>
  )
}

export default TodoItemMenu
