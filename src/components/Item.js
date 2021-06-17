import React from 'react'

function Item(props) {
  console.log(props)

  return (
    <>
      <li>{props.value}</li>
    </>
  )
}

export default Item
