import React from 'react'

function Summary(props) {
  const { productCount, total } = props

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>商品小計</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col" style={{ paddingLeft: 0 }}>
            共計 {productCount} 項目
          </div>
        </div>

        <div
          className="row"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '2vh 0',
          }}
        >
          <div className="col">合計金額</div>
          <div className="col text-right">${total}</div>
        </div>
        <button className="btn">前往結帳</button>
      </div>
    </>
  )
}

export default Summary
