import React, { useState } from 'react'
import './App1.css'
import Summary from './components/Summary'
import OrderList from './components/OrderList'

function App() {
  const [tshirtOne, setTshirtOne] = useState(1)
  const [tshirtTwo, setTshirtTwo] = useState(1)
  const [tshirtThree, setTshirtThree] = useState(1)

  // 每個商品單價
  const priceList = {
    tshirtOne: 300,
    tshirtTwo: 200,
    tshirtThree: 350,
  }

  // 每個商品圖示
  const pictureList = {
    tshirtOne: 'https://i.imgur.com/1GrakTl.jpg"',
    tshirtTwo: 'https://i.imgur.com/ba3tvGm.jpg',
    tshirtThree: 'https://i.imgur.com/pHQ3xT3.jpg',
  }

  //  每個商品名稱
  const nameList = {
    tshirtOne: '咖啡色 T-shirt',
    tshirtTwo: '白色 T-shirt',
    tshirtThree: '黑色 T-shirt',
  }

  // 計算總價  toLocaleString():15250 => 15,250
  const total = () =>
    Number(
      priceList['tshirtOne'] * tshirtOne +
        priceList['tshirtTwo'] * tshirtTwo +
        priceList['tshirtThree'] * tshirtThree
    ).toLocaleString()

  // 計算商品數量
  const productCount = () => tshirtOne + tshirtTwo + tshirtThree

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList
            tshirtOne={tshirtOne}
            setTshirtOne={setTshirtOne}
            tshirtTwo={tshirtTwo}
            setTshirtTwo={setTshirtTwo}
            tshirtThree={tshirtThree}
            setTshirtThree={setTshirtThree}
            priceList={priceList}
            pictureList={pictureList}
            nameList={nameList}
          />
          <Summary productCount={productCount} total={total} />
        </div>
      </div>
    </>
  )
}

export default App
