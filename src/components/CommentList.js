import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { addComment, deleteComment } from '../AC'
import {connect} from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        commentsIds: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        comments : []
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    handleCommentAdd = newComment => {
        const { articleId } = this.props
        this.props.addComment(articleId, newComment)
        console.log(articleId, newComment)
    }

    handleDelete = id => () => {
        const { articleId } = this.props
        this.props.deleteComment(articleId, id)
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={this.handleCommentAdd} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment =>
            <div key={comment.id}>
                <li><Comment comment={comment} /></li>
                <div>
                    <a href="#" onClick = {this.handleDelete(comment.id)}>delete comment</a>
                </div>
            </div>
        )
        return (
            <div>
                <ul ref='list'>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.commentsIds.map(id => storeState.comments.get(id))
    }
}, {addComment, deleteComment})(toggleOpen(CommentList))
