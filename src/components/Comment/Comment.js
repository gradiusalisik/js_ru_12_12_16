import React, { Component } from 'react'

export default class Comment extends Component {

  getComment() {
    const { comment } = this.props
    return (
      <div>
          <span>{comment.user}</span>
          <p>{comment.text}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.getComment()}
      </div>
    )
  }
}