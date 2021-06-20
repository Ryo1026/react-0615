import React from 'react'
import Child from './components/Child'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isChildLive: true,
    }
    console.log('App constructor')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount')
  }

  render() {
    console.log('App render')

    return (
      <>
        <button
          onClick={() => {
            this.setState({ isChildLive: true })
          }}
        >
          Live
        </button>
        <button
          onClick={() => {
            this.setState({ isChildLive: false })
          }}
        >
          Die
        </button>
        <hr />
        {this.state.isChildLive ? <Child /> : ''}
      </>
    )
  }
}

export default App
