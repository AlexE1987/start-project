import './TodoFilter.css';
import React, {FC} from 'react'

interface ITodoFilter {
  filterCompleted: () => void,
  filterUncompleted: () => void,
  filterFavorite: () => void,
}

const TodoFilter:FC<ITodoFilter> = ({filterCompleted, filterUncompleted, filterFavorite}) => {

  return (
    <div className="todo-filter__wrapper">
      <h4>Filtered by</h4>
      <div className="todo-btn-filter__container">
        <button onClick={filterCompleted} className="todo-filter-btn">comp/comp+fav</button>
        <button onClick={filterUncompleted} className="todo-filter-btn">Unc/Unc+favo</button>
        <button onClick={filterFavorite} className="todo-filter-btn">Fav+Unc</button>
      </div>
    </div>
  )
}

export default TodoFilter
