import React from 'react';
import { For } from 'react-loops';

import connect from 'utils/connect';

import * as UI from './ui'

class ShopScreen extends React.Component {
  componentWillMount = async () => {
    const { Article } = this.props;
    Article.find()
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  onPressArticle = article => e => {
    const { navigation } = this.props
    navigation.navigate('Wallet')
  }

  render() {
    const { articles } = this.props;
    const { onNavigate, onPressArticle } = this;

    return (
      <UI.Screen scroll>
        <UI.Screen.Header background>
          <UI.Screen.Header.Title light>Boutique Pop Eye</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content>
          <UI.Screen.Column style={{ padding: 30}}>
            <For of={articles} as={(article) => (
              <UI.Article model={article} onPress={onPressArticle(article)}/>
            )}/>
          </UI.Screen.Column>
        </UI.Screen.Content>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    articles: state.articles,
    creditCard: state.creditCard,
  }),
  (dispatch, props, models) => ({
    Article: models.Article,
  }),
)(ShopScreen);
