import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { products, counts, setCounts } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {products.map((product, index) => (
          <ProductItem
            category={product.category}
            name={product.name}
            image={product.image}
            price={product.price}
            count={counts[index]}
            setCount={(newCount) => {
              //  先從目前狀態中複製一個新陣列
              const newCounts = [...counts]

              // 更新數量陣列自己的索引值, 因至少要購買一件, 若小於1則用1來更新
              newCounts[index] = newCount < 1 ? 1 : newCount

              setCounts(newCounts)
            }}
          />
        ))}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
