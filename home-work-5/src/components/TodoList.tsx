import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchTodoList } from '../redux/actions/todoList'

const TodoList: FC = () => {

const {todoList, error, loading} = useTypedSelector((store) => store.todo)
const dispatch = useDispatch()

useEffect(()=> {
dispatch(fetchTodoList())
},[dispatch])

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <ul>
      {todoList.map(listItem =>
      <li key={listItem.id}>{listItem.description}</li>)}
    </ul>
  )
}

export default TodoList
