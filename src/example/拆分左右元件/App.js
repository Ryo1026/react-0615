import React, { useState } from 'react'
import './App1.css'
import Summary from './components/Summary'
import OrderList from './components/OrderList'

function App() {
  const [tshirtOne, setTshirtOne] = useState(1)
  const [tshirtTwo, setTshirtTwo] = useState(1)
  const [tshirtThree, setTshirtThree] = useState(1)

  // 每個商品單價
  const price = {
    tshirtOne: 300,
    tshirtTwo: 200,
    tshirtThree: 350,
  }

  // 計算總價  toLocaleString():15250 => 15,250
  const total = () =>
    Number(
      price['tshirtOne'] * tshirtOne +
        price['tshirtTwo'] * tshirtTwo +
        price['tshirtThree'] * tshirtThree
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
          />
          <Summary productCount={productCount} total={total} />
        </div>
      </div>
    </>
  )
}

export default App
