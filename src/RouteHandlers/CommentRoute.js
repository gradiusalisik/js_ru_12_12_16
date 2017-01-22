import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'

class CommentRoute extends Component {
    static propTypes = {

    };

    render() {
        return <Comment id={this.props.params.id} isOpen={true} key={this.props.params.id} />
    }
}

export default CommentRoute
