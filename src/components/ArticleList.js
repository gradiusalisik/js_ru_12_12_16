import React, { Component, PropTypes as pt} from 'react'
import Article from './Article'
import Chart from './Chart'
import AccordeonToggle from '../decorators/accordeonToggle'

class ArticleList extends Component {

    static propTypes = {
        articles: pt.array
    }

    static defaultProps = {
        articles: []
    }

    render() {
        const { articles, openItemId, onToggleAccrordeon } = this.props
        const articleElements = articles.map(article => {
            const isOpen = openItemId === article.id
            return <li key={article.id}>
                <Article article={article}
                    isOpen={isOpen}
                    onClick={onToggleAccrordeon(article.id, isOpen)}
                />
            </li>

        })

        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}

export default AccordeonToggle(ArticleList)
