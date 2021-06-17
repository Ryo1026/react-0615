import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RadioBox from './components/RadioBox'

// 函式型元件
function App() {
  const [textfield, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  const [gender, setGender] = useState('')
  // 單一勾選(核取方塊)
  const [agree, setAgree] = useState(false)

  // 多勾選(核取方塊)，用陣列
  const [likeList, setLikeList] = useState([])

  return (
    //  JSX 語法 return 只能有一個最外層的元素
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>REACT 表格內容</p>
          <h5>文字輸入區</h5>
          <input
            type="text"
            value={textfield}
            onChange={(event) => {
              setTextfield(event.target.value)
            }}
          />
          <hr />

          <h5>文字區域</h5>
          {/* React中的文字區域是單個元素標記的 */}
          {/* 因此取值用value 而非innertext */}
          <textarea
            value={textarea}
            onChange={(e) => {
              setTextarea(e.target.value)
            }}
          />
          <hr />

          <h5>下拉選單</h5>
          <select
            value={seletedOption}
            onChange={(e) => {
              setSeletedOption(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            <option value="百香果">百香果</option>
            <option value="葡萄">葡萄</option>
            <option value="草莓">草莓</option>
            <option value="香蕉">香蕉</option>
            <option value="鳳梨">鳳梨</option>
            <option value="蘋果">蘋果</option>
          </select>
          <hr />

          <h5>選項按鈕</h5>
          <input
            type="radio"
            value="男"
            checked={gender === '男'}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          />
          <label>男性</label>
          <input
            type="radio"
            value="女"
            checked={gender === '女'}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          />
          <label>女性</label>
          {/* 用一個陣列產出所有選項按鈕群組 */}
          {['男', '女', '未定'].map((v, i) => {
            return (
              <RadioBox
                key={i}
                value={v}
                gender={gender}
                setGender={setGender}
              />
            )
          })}
          <hr />

          <h3>單一核取方塊</h3>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked)
            }}
          />
          <label>我同意相關規定</label>
          <hr />

          <h3>多個核取方塊(陣列)</h3>
          <input
            type="checkbox"
            value="雞腿"
            onChange={(e) => {
              const value = e.target.value

              // 陣列沒有包含->加入
              // 加return中斷以下的程式碼
              if (!likeList.includes(value))
                return setLikeList([...likeList, value])

              // 陣列有包含->移出
              if (likeList.includes(value)) {
                const newLikeList = likeList.filter((v) => v !== value)
                setLikeList(newLikeList)
              }
            }}
            checked={likeList.includes('雞腿')}
          />
          <label>雞腿</label>

          <input
            type="checkbox"
            value="排骨"
            onChange={(e) => {
              const value = e.target.value
              if (!likeList.includes(value))
                return setLikeList([...likeList, value])

              if (likeList.includes(value)) {
                const newLikeList = likeList.filter((v) => v !== value)
                setLikeList(newLikeList)
              }
            }}
            checked={likeList.includes('排骨')}
          />
          <label>排骨</label>
        </header>
      </div>
    </>
  )
}

export default App
