import React from 'react' // v17版可省略

// 類別型元件
class App extends React.Component {
  constructor() {
    super() // 繼承來自React.Component的建構式
    this.state = {
      total: 0,
    }
  }
  render() {
    return (
      <h1
        onClick={() => {
          this.setState({ total: this.state.total + 1 })
        }}
      >
        {this.state.total}
      </h1>
    )
  }
}

export default App
