import React, { Component, PropTypes } from 'react'

const ENTER_KEY = 13

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' onKeyDown={(e) => this.checkKeyPress(e)} />
        <button onClick={(e) => this.submitInput(e)}>
          Add
        </button>
      </div>
    )
  }

  checkKeyPress(e) {
    if (e.keyCode === ENTER_KEY) {
      this.submitInput(e)
    }
  }

  submitInput(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
