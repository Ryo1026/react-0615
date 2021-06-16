import React from 'react'
import PropTypes from 'prop-types' // yarn 安裝套件才能執行第24行 指令:yarn add prop-types

// 注意三個位置名字要相同 1.檔名 2.函式名 3.export default 函式型物件名稱
function MyButton(props) {
  const { setTotal, total, value } = props // 先將傳入參數進行解構賦值

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {value > 0 && '+'}
        {value}
      </button>
    </>
  )
}

// 導入 propType 套件可以針對傳入的資料類型做篩選
MyButton.propTypes = {
  value: PropTypes.number,
  //  不過即使輸入非數字 程式還是會執行字串的+ 只有主控台會報錯 不影響程式執行
}

// 設定參數預設值 ex:父母元件沒設定時
MyButton.defaultProps = {
  value: 9,
}

export default MyButton
