import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handleCompleted, handleDelete } = props

  return (
    <>
      <ul>
        {todos.map((todoItem, i) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
