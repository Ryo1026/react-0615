import React from 'react'

function TodoItem(props) {
  const { todoItem, handleCompleted, handleDelete } = props
  return (
    <>
      <li key={todoItem.id}>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => {
            handleCompleted(todoItem.id)
          }}
        />
        {/* 若事項已完成 則產生刪除線項目 */}
        {todoItem.completed ? <del>{todoItem.text}</del> : todoItem.text}
        <button
          onClick={() => {
            handleDelete(todoItem.id)
          }}
        >
          刪除
        </button>
      </li>
    </>
  )
}

export default TodoItem
