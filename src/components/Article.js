import React, { Component } from 'react'
//лучше разбить этот компонент на несколько более мелких(отдельно CommentList, а в идеале и Comment)
export default class Article extends Component {
    state = {
        isOpen: false,
        isOpenComments: false
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
                {/*не пиши много кода внутри JSX, очень быстро становится нечитабельным*/}
                { comments &&
                    <div>
                    <button style={style} onClick={this.toggleOpenComments}>
                        {this.state.isOpenComments ? 'Hide': 'Show'}
                    </button>
                    </div>
                }
                {this.getComments()}
            </section>
        )
    }

    toggleOpenComments = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }

    getComments() {
        const { comments } = this.props
        if (!this.state.isOpenComments) return null
        return (
            <div>
                <ul>
                    {comments && comments.map(comment => {
                        return (
                            <li key={comment.id}>
                                <span>{comment.user}</span>
                                <div>{comment.text}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
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
