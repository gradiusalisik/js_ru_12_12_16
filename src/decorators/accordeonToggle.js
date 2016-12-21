//decorator === HOC(Higher Order Component)
import React from 'react'

export default function AccordeonToggle(Component) {
    return class WrapperComponent extends React.Component {
        state = {
          //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
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
          //ок, но я б предпочел в один setState записать и isOpen тут решать - незачем усложнять Api ползователям
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
