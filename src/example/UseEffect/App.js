import React, { useEffect, useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  // 只是目前元件已進入更新狀態
  const [start, setStart] = useState(false)

  // 第一個參數為 callbackFun 等同呼叫 componentDidMount
  useEffect(() => {
    console.log('componentDidMount ')
    setStart(true)
  }, [])

  // 第一次執行 componentDidUpdate 會初始化 componentDidMount(會印出total=0)
  useEffect(() => {
    console.log('componentDidUpdate + componentDidMount ', total)
  }, [total])

  // 避免執行 componentDidMount 單純執行 componentDidUpdate
  useEffect(() => {
    if (!start) return
    console.log('componentDidUpdate ', total)
  }, [total])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App
