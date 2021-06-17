import React, { useState } from 'react'
import './App1.css'
import Summary from './components/Summary'
import OrderList from './components/OrderList'

// 預設訂購產品的項目 可能從資料庫撈出 這邊暫時寫死
// 一個 Array 內有多個 Object
const products = [
  {
    name: '咖啡色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    name: '白色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    name: '黑色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
]

function App() {
  // 對於產品數量的動態設定 把這一整個區塊的產品數量用陣列呈現為一個狀態
  // counts 初始化 [1,1,1,1] 四項產品每項買一件
  const [counts, setCounts] = useState(Array(products.length).fill(1))

  // 計算總價的函式
  const total = () => {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price * counts[i]
    }
    return sum.toLocaleString()
  }

  // 計算購買的產品數量函式
  const productCount = () => {
    let totalCount = 0
    for (let i = 0; i < counts.length; i++) {
      totalCount += counts[i]
    }
    return totalCount
  }

  return (
    <>
      <div className="card">
        <div className="row">
          {/* 產品列表區 */}
          <OrderList
            products={products}
            counts={counts}
            setCounts={setCounts}
          />
          {/* 產品摘要區 */}
          <Summary total={total()} productCount={productCount()} />
        </div>
      </div>
    </>
  )
}

export default App
