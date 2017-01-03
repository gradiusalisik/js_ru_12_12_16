import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Filter extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        company: 'company',
        name: 'Vasya'
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select labelKey={this.state.company + '_hello_' + this.state.name} options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({
        selected
    })
}

export default Filter
