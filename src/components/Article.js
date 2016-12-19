import React, { Component } from 'react'
import CommentList from './CommentList/CommentList'

export default class Article extends Component {
    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        const { article, comments } = this.props
        const style = {
            cursor: 'pointer'
        }
        if (!this.state.isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments={comments} />
            </section>
        )
    }

    render() {
        const { article } = this.props
        const style = {
            cursor: 'pointer'
        }
        return (
            <div>
                <h3 style={style} onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }
}
