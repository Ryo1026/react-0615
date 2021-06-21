import React, { useState } from 'react'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  //  將待辦事件物件化
  //  todo = { id:number, text:string , completed:boolean }

  const [todos, setTodos] = useState([
    { id: 1, text: '買筆電', completed: false },
    { id: 2, text: '做XD手機版', completed: false },
    { id: 3, text: '撰寫計劃書', completed: false },
  ])

  const handleDelete = (id) => {
    // 由目前的todos拷貝+過濾掉不要有這個id的新Array
    const newTodos = todos.filter((item) => item.id !== id)

    setTodos(newTodos)
  }

  const handleCompleted = (id) => {
    // 先由目前的todos拷貝出一個Array
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    // 有找到就切換 completed 的狀態 true/false
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }
  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          console.log(e)
          if (e.key === 'Enter' && e.target.value !== '') {
            // 建立todo項目的物件值
            const newTodoItem = {
              id: +new Date(), // 時間obj產生id
              text: e.target.value,
              cpmpleted: false,
            }

            // 文字輸入框的值加到陣列todos
            // 相當於unshift，在陣列前加入新的成員
            const newTodos = [newTodoItem, ...todos]
            setTodos(newTodos)

            setTodoInput('') // 清空文字輸入框
          }
        }}
      />
      <ul>
        {todos.map((todoItem, i) => {
          return (
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
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
