import React, { useState } from 'react' // React 本體 與 hooks 部分導入
import MyButton from './components/MyButton'
import Parent from './components/Parent'
import logo from './logo.svg'
import './App.css'

// 函式型元件
function App() {
  // console.log(useState(0))

  // 使用 "狀態"hooks: useState()
  const [total, setTotal] = useState(-10) // 解構賦值 ; useState()回傳為array
  // 命名方式 const [abc, setAbc]

  return (
    //  JSX 語法 return 只能有一個最外層的元素
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            REACT 開始囉 <br />
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1
            onClick={() => {
              setTotal(total + 1)
            }}
          >
            {total}
          </h1>
          {total ? <h2>{total}是true</h2> : <h2>{total}是false</h2>}
          {/* JSX的註解長這樣 */}
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          <div className="btn-group" role="group" aria-label="Basic example">
            <MyButton setTotal={setTotal} total={total} value={10} />
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                setTotal(total + 1)
                // setXXX 為唯一可以改變前者變數值的 function
                // 因此不能寫成 total = total + 1
              }}
            >
              +1
            </button>
            <button type="button" className="btn btn-light">
              {total}
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                setTotal(total - 1)
              }}
            >
              -1
            </button>
            <MyButton setTotal={setTotal} total={total} value={-10} />
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="輸入你的 email"
              />
              <small id="emailHelp" className="form-text text-muted">
                Hey Guys~Keep Going!
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">密碼</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="於此輸入你的密碼"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              送出
            </button>
          </form>

          <Parent />
        </header>
      </div>
    </>
  )
}

export default App
