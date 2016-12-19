//decorator === HOC(Higher Order Component)
import React from 'react'

export default function AccordeonToggle(Component) {
    return class WrapperComponent extends React.Component {
        state = {
          openArticleId: null,
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
          if (isOpen) {
            this.setState({
              openArticleId: null
            })
          } else {
             this.setState({
              openArticleId: activeId
            })
          }

        }
    }
}
