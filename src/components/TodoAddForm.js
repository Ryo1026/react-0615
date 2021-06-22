import React from 'react'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props

  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleAddNew}
      />
    </>
  )
}

export default TodoAddForm
