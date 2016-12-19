import React, { Component, PropTypes as pt}  from 'react'

export default class Comment extends Component {

    static propTypes = {
        text: pt.string,
        user: pt.string
    }

    render() {
        const { comment: { text, user } } =  this.props
        return (
            <div>
                {text} <b>{user}</b>
            </div>
        )
    }
}