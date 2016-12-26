import React, { Component, PropTypes } from 'react'
import './index.css'

class AddComment extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  state = {
    //ок, но я просил user и text
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    console.log(this.state.value);
  }

  render() {
      return (
        <div className='addComment'>
          <p className='addComment__text'>
            Your comment:
          </p>
          <textarea
            className='addComment__textarea'
            type='text'
            placeholder='Напишите комментарий'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div>
            <button className='addComment__button' onClick={this.handleClick}> Добавить </button>
          </div>
        </div>
      )
  }
}

export default AddComment
