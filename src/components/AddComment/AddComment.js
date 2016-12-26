import React, { Component, PropTypes } from 'react'
import './index.css'

class AddComment extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  state = {
    user: '',
    text: ''
  }

  handleChangeUser = e => {
    this.setState({
      user: e.target.value
    })
  }

  handleChangeText = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = () => {
    console.log(this.state);
  }

  render() {
      return (
        <div className='addComment'>
          <p className='addComment__text'>
            Your comment:
          </p>
          <input
            className='addComment__input'
            type='text'
            placeholder='Напишите имя'
            value={this.state.user}
            onChange={this.handleChangeUser}
          />
          <textarea
            className='addComment__textarea'
            type='text'
            placeholder='Напишите комментарий'
            value={this.state.text}
            onChange={this.handleChangeText}
          />
          <div>
            <button className='addComment__button' onClick={this.handleClick}> Добавить </button>
          </div>
        </div>
      )
  }
}

export default AddComment
