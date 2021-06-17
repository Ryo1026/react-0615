import React, { useRef } from 'react'
import Item from './components/Item'

function App() {
  const inputElement = useRef()

  return (
    <>
      <ul>
        {[1, 2, 3].map((v, i) => (
          <Item value={v} key={i} />
        ))}
      </ul>

      {/* 標籤中的 key 與 ref 都不算是元件的屬性(props) */}
      <input type="text" ref={inputElement} />
      <button
        onClick={() => {
          inputElement.current.focus()
        }}
      >
        Focus 輸入框
      </button>
    </>
  )
}

export default App
