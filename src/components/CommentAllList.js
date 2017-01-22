import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import { loadAllComments } from '../AC'
import { mapToArray } from '../helpers'
import Loader from './Loader'
import {connect} from 'react-redux'

class CommentsAllList extends Component {
  static propTypes = {
  }

  componentDidMount() {
    this.props.loadAllComments()
  }

  render() {
    const { loading } = this.props
    const loader = loading && <Loader />
    console.log('loader',loader);
    return (
      <div>
        {this.getBody()}
        {loader}
      </div>
    )
  }

  getBody() {
    const { comments, loading } = this.props
    const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return (
      <div>
        <ul>{commentItems}</ul>
      </div>
    )
  }
}

export default connect(state => {
  return {
    comments: mapToArray(state.comments.entities),
    loading: state.comments.loading
  }
}, { loadAllComments })(CommentsAllList)
