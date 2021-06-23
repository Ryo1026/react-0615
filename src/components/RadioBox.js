import React from 'react'

function RadioBox(props) {
  const { gender, setGender, value } = props

  return (
    <>
      <input
        type="radio"
        value={value}
        checked={gender === value}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>{value}</label>
    </>
  )
}

export default RadioBox
