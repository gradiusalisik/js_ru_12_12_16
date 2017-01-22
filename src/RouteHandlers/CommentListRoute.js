import React, { Component, PropTypes } from 'react'
import CommentList from '../components/CommentList'

class CommentListRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <CommentList />
                {this.props.children}
            </div>
        )
    }
}

export default CommentListRoute
