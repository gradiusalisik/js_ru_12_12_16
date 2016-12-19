//decorator === HOC(Higher Order Component)
import React from 'react'

export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            isOpen: false,
        }
        render() {
            return <Component
                {...this.props}
                {...this.state}
                isOpen={this.state.isOpen}
                toggleOpen={this.toggleOpen}
                />
        }

        toggleOpen = (ev) => {
            if (ev) ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

    }
}