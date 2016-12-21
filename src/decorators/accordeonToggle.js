//decorator === HOC(Higher Order Component)
import React from 'react'

export default function AccordeonToggle(Component) {
    return class WrapperComponent extends React.Component {
        state = {
          openItemId: null,
        }


        render() {
          return (
            <Component
              {...this.props}
              {...this.state}
              onToggleAccrordeon={this.toggleOpenArticle}
            />
          )
        }

        toggleOpenArticle = (activeId, isOpen) => () => {
            this.setState({
              openItemId: isOpen ? null : activeId
            })
        }
    }
}
