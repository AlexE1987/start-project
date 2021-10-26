import React, { FC } from 'react'
import { useSelector } from 'react-redux'




const TodoList: FC = () => {
  interface RootState {
    todoList: []
  }
  
  // TS infers type: (state: RootState) => boolean
  const selectIsOn = (state: RootState) => state.todoList
  
  // TS infers `isOn` is boolean
  const isOn = useSelector(selectIsOn)
  console.log(isOn);
  
  return (
    <div>
      To-do
    </div>
  )
}

export default TodoList
