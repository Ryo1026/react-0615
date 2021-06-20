import React, { useState } from 'react'

function App() {
  const [fields, setFields] = useState({ username: '', password: '' })

  const handleFieldChange = (e) => {
    // 物件合併語法
    // 目前是 { username:'123', password:'aaa'}  + {username:'555'} =>
    // { username:'555', password:'aaa'}
    const newFields = { ...fields, [e.target.name]: e.target.value }

    setFields(newFields)
  }

  return (
    <>
      <div>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={(e) => {
            // 物件合併語法
            // 目前是 { username:'123', password:'aaa'}  + {username:'555'} =>
            // { username:'555', password:'aaa'}
            const newFields = { ...fields, username: e.target.value }

            setFields(newFields)
          }}
        />
      </div>
      <div>
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
        />
      </div>
    </>
  )
}

export default App
