import './TodoItemMenu.css'

import React, {FC} from 'react'

type ITodoMenuProps = {
  id: number,
  removeItem: (id: number) =>void
  toFavorite: (id: number) =>void
}

const TodoItemMenu: FC<ITodoMenuProps> = ({removeItem, toFavorite, id}) => {
  return (
    <div className="item-menu_container">
      <button onClick={() =>toFavorite(id)} className="menu-btn">
        <img className="menu-img" src="/icons/star.ico" alt="to favorites" />
      </button>
      <button className="menu-btn">
        <img className="menu-img" src="/icons/completed.ico" alt="to comlete" />
      </button>
      <button className="menu-btn">
        <img className="menu-img" src="/icons/edit.svg" alt="to edit" />
      </button>
      <button onClick={() =>removeItem(id)} className="menu-btn">
        <img className="menu-img" src="/icons/delete.svg" alt="to delete" />
      </button>
    </div>
  )
}

export default TodoItemMenu
