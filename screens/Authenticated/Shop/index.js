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
      : navigation.goBack()
  }

  onBuy = article => e => {
    console.log('ON BUY ARTICLE : ', {article, e})
  }

  render() {
    const { articles } = this.props;
    const { onNavigate, onBuy } = this;

    return (
      <UI.Screen scroll>
          <UI.Screen.Header background>
          <UI.Screen.Header.Bar onPress={onNavigate()}>
            <UI.Screen.Header.Bar.Back light>
              Back
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title>Pop Eye Plus</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content>
          <UI.Screen.Column style={{ padding: 30}}>
            <For of={articles} as={(article) => (
              <UI.Article model={article} onPress={onBuy(article)}/>
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
  }),
  (dispatch, props, models) => ({
    Article: models.Article,
  }),
)(ShopScreen);
