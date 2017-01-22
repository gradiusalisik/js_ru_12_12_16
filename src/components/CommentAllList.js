import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import { loadAllComments } from '../AC'
import { mapToArray } from '../helpers'
import {connect} from 'react-redux'

class CommentsAllList extends Component {
  static propTypes = {
  }

  componentDidMount() {
    this.props.loadAllComments()
  }

  render() {
    return (
      <div>
          {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments } = this.props
    console.log(comments);
    const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return (
      <div>
          <ul>{commentItems}</ul>
      </div>
    )
  }
}

export default connect(state => {
  comments: mapToArray(state.comments.entities)
}, { loadAllComments })(CommentsAllList)
