import React from 'react'

class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 1,
    }
    console.log('Child constructor', this.state.total)
  }

  componentDidMount() {
    console.log('Child componentDidMount', this.state.total)
  }

  componentDidUpdate() {
    console.log(
      'Child componentDidUpdate',
      this.state.total
    )
  }

  componentWillUnmount() {
    console.log(
      'Child componentWillUnmount',
      this.state.total
    )
  }

  render() {
    console.log('Child render', this.state.total)

    return (
      <h2
        onClick={() => {
          this.setState({ total: this.state.total + 1 })
        }}
      >
        {this.state.total}
      </h2>
    )
  }
}

export default Child
