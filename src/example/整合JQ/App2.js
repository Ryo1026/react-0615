import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const [data, setData] = useState(123)
  // 指示元件是否已經完成mount，進入update階段
  const [didMount, setDidMount] = useState(false)

  const buttonRef = useRef()

  // componentDidMount
  useEffect(() => {
    // jquery程式碼寫在這裡, 確保dom已經出現在網頁
    // 使用id
    $('#one').on('click', () => {
      alert('data is ' + data)
    })

    // 使用refs(推薦)
    $(buttonRef.current).on('click', () => {
      alert('data is ' + data)
    })

    // 元件已完成mount階段
    setDidMount(true)
  }, [])

  // componentDidUpdate
  useEffect(() => {
    // 第一次不執行
    if (!didMount) return

    // jquery程式碼寫在這裡, 確保dom已經出現在網頁
    // 使用id
    // 移除事件監聽
    $('#one').off('click')

    // 加入新的事件監聽
    $('#one').on('click', () => alert('data is ' + data))

    //-----------------------------------------
    // 使用refs(推薦)
    $(buttonRef.current).off('click')

    $(buttonRef.current).on('click', () => {
      alert('data is ' + data)
    })
  }, [data, didMount])

  return (
    <>
      <button id="one">Click(use id)</button>
      {/* 使用ref，確保重覆使用元件時不會衝突到dom元素參照 */}
      <button ref={buttonRef}>Click(use refs)</button>

      <hr />
      <button
        onClick={() => {
          setData('Hello!')
        }}
      >
        Change State
      </button>
    </>
  )
}

export default App
