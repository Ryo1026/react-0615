import React from 'react'
import { withRouter } from 'react-router'

function Login(props) {
  console.log(props)

  const { auth, setAuth } = props

  return (
    <>
      <h1>Login</h1>
      <h2>會員登入情況: {auth ? '已經登入' : '未登入'}</h2>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        返回上一頁
      </button>
      <button
        onClick={() => {
          props.history.push('/login')
        }}
      >
        跳到登入頁
      </button>
    </>
  )
}

export default withRouter(Login)
