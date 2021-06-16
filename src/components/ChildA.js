import React, { useState } from 'react'
// 其實不建議子元件有自己的狀態

function ChildA(props) {
  const [childAData, setChildAData] = useState('ChildA Data')

  return (
    <>
      <h1>This is ChildA</h1>
      <button
        onClick={() => {
          setChildAData(childAData)
          props.setParentData(childAData)
        }}
      >
        傳送資料給父母(Parent)元件
      </button>
    </>
  )
}

export default ChildA
