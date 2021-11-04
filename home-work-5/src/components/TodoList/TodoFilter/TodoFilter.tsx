import './TodoFilter.css';
import React, {FC} from 'react'

interface ITodoFilter {
  activeFilter: string,
  filterAll: () => void,
  filterCompleted: () => void,
  filterUncompleted: () => void,
  filterFavorite: () => void,
}

const TodoFilter:FC<ITodoFilter> = 
  ({activeFilter, filterAll, filterCompleted, 
  filterUncompleted, filterFavorite}) => {

  return (
    <div className="todo-filter__wrapper">
      <h4>Filtered by</h4>
      <div className="todo-btn-filter__container">
        <button 
          data-test-id="filter-completed"
          onClick={filterCompleted} 
          className={
            activeFilter === 'Completed' 
            ? "todo-filter-btn active" 
            : "todo-filter-btn"}>
          Completed
        </button>
        <button
          data-test-id="filter-uncompleted"
          onClick={filterUncompleted} 
          className={
            activeFilter === 'Uncompleted' 
            ? "todo-filter-btn active" 
            : "todo-filter-btn"}>
          Uncompleted
        </button>
        <button
          data-test-id="filter-favorite"
          onClick={filterFavorite} 
          className={
            activeFilter === 'Favorite' 
            ? "todo-filter-btn active" 
            : "todo-filter-btn"}>
          Favorite
        </button>
        <button
        data-test-id="filter-all"
        onClick={filterAll} 
        className="todo-filter-btn">All</button>
      </div>
    </div>
  )
}

export default TodoFilter
