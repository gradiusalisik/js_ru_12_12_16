import React, { Component, PropTypes } from 'react'
import {addComment} from '../AC'
import {loadCommentById, loadAllComments} from '../AC/comment'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        this.props.loadCommentById(this.props.article.id)
    }

    // componentWillReceiveProps(nextProps) {
    //     if (!this.props.isOpen && nextProps.isOpen) nextProps.loadCommentById(nextProps.article.id)
    // }

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

    getBody() {
        const { comments, loading, article, isOpen, addComment } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment => {
            return <li key={comment.id}><Comment comment={comment} /></li>
        })
        return (
            <div>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.article.comments.map(id => storeState.comments.get(id))
    }
}, { addComment, loadCommentById })(toggleOpen(CommentList))
