import React, { Component, PropTypes as pt } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        toggleOpen: pt.func,
        comments: pt.array,
        isOpen: pt.bool
    }

    static defaultProps = {
        comments: [],
        toggleOpen: () => {}
    }

    // componentWillMount() {
    //     console.log('---', 1)
    // }

    // componentDidMount() {
    //     console.log('---', 2)
    // }

    // componentWillUnmount() {
    //     console.log('---', 3)
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log('---', 'updating to toggle open', this.props.isOpen !== nextProps.isOpen)
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
        const { isOpen, toggleOpen } = this.props
        return <a href="#" onClick = {toggleOpen}>
            {isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }
}

export default toggleOpen(CommentList)