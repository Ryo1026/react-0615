import React, { useState } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

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

  const handleAddNew = (e) => {
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
  }

  return (
    <>
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleAddNew={handleAddNew}
      />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default TodoApp
