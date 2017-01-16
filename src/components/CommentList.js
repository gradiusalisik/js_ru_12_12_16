import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { addComment } from '../AC'
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
        const newComments = this.props.comments.slice()
        console.log('1', this.props.comments)
        newComments.push(newComment)
        this.setState({
            comments: newComments
        })
        // this.props.addComment(newComment)
        debugger
        console.log('2', this.state.comments)
        console.log('3', this.props.comments)
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={this.handleCommentAdd} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <ul ref='list'>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    // debugger
    return {
        comments: props.commentsIds.map(id => storeState.comments.get(id))
    }
}, {addComment})(toggleOpen(CommentList))
