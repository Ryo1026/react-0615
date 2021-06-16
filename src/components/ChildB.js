import React from 'react'

function ChildB(props) {
  return (
    <>
      <h1>This is ChildB</h1>
      <p>從父母元件取得的資料:{props.childAData}</p>
    </>
  )
}

export default ChildB
