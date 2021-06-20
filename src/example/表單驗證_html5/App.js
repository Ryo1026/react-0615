import React, { useState } from 'react'

function App() {
  // 定義有哪些欄位將其設置為屬性
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位
    const updateFields = {
      // 展開物件並修改欄位值
      ...fields,
      [e.target.name]: e.target.value,
    }
    setFields(updateFields)
  }

  // 處理表單送出
  const handleSubmit = (e) => {
    e.preventDefault()

    // 可利用 FormData 物件並加入表格元素作為參數
    const data = new FormData(e.target)

    // 得到表格中各個欄位值
    console.log(data.get('email'))
    console.log(data.get('password'))

    // 或直接利用狀態取得
    console.log(fields)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
          placeholder="帳號"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
          placeholder="email信箱"
        />
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          placeholder="密碼"
          required
          minLength="6"
        />
        <button type="submit">提交表單</button>
      </form>
    </>
  )
}

export default App
