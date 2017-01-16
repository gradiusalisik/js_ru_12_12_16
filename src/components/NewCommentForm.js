import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func
    }

    state = {
        text: '',
        user: '',
        id: Date.now()
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        const { text, user, id } = this.state;
        const newComments = {
            text: text,
            user: user,
            id: id
        }
        ev.preventDefault()
        this.props.addComment(newComments)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm
