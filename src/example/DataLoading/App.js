import React, { useEffect, useState } from 'react'

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
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false) // 控制指示器開關的狀態

  // ComponentDidMount
  useEffect(() => {
    // 1.先開啟指示器
    setIsLoading(true)

    // 2.載入設定資料(從伺服器端) ex:fetch/AJAX
    setData(products)

    // 3.關起指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
  const display = (
    <>
      {data.map((product, index) => {
        return (
          <div key={index}>
            <h3>{product.name}</h3>
          </div>
        )
      })}
    </>
  )

  return (
    <>
      <div className="container">{isLoading ? spinner : display}</div>
    </>
  )
}

export default App
