import React, { useState, useEffect, useRef } from 'react'

// 自訂的勾子
// https://zh-hant.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function App() {
  const [count, setCount] = useState(0)

  // 這裡可以得到之前的屬性或狀態
  const prevCount = usePrevious(count)

  // 在useEffect裡使用
  useEffect(() => {
    console.log(count, prevCount)
  }, [count, prevCount])

  return (
    <>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
    </>
  )
}

export default App
