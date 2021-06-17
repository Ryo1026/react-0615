import React, { useState } from 'react' // 導入 React 本體與 hooks
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('origin') // ['origin', f]
  return (
    <>
      <p>目前資料來源為:{parentData}</p>

      {/* 這裡將 setParentData這個函式 作為子元件 ChildA 的傳入參數 callbackFunction 的概念 */}
      <ChildA setParentData={setParentData} />
      <ChildB childAData={parentData} />
    </>
  )
}

export default Parent
