import React, { Component } from 'react'
import Comment from '../Comment/Comment'

export default class CommentList extends Component {

  state = {
    isOpenComments: false
  }

  toggleOpenComments = () => {
    this.setState({
        isOpenComments: !this.state.isOpenComments
    })
  }

  getComments() {
    const {comments} = this.props
    const commentElements = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
    if (!this.state.isOpenComments) return null
    return (
      <div>
        {commentElements}
      </div>
    )
  }

  render() {
    const style = {
      cursor: 'pointer'
    }
    return (
      <div>
        <button style={style} onClick={this.toggleOpenComments}>
            {this.state.isOpenComments ? 'Hide': 'Show'}
        </button>
        <ul>
          { this.getComments() }
        </ul>
      </div>
    )
  }
}