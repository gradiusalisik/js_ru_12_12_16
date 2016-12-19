import React, { Component, PropTypes as pt} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

export default class Article extends Component {
    static propTypes = {
        article: pt.object.isRequired,
        onClick: pt.func,
        isOpen: pt.bool
    }

    static defaultProps = {
        onClick: () => {}
    }

    componentDidMount() {
        console.log('---', this.refs.container)
    }

    render() {
        const { article, onClick } = this.props
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen, article } = this.props

        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} />
            </section>
        )
    }
}
