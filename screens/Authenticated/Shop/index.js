import React from 'react';
import { For } from 'react-loops';

import connect from 'utils/connect';

import * as UI from './ui'

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '=': (x, y) => y,
  '*': (x, y) => x * y,
}
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
    const { Member, Modal, me, navigation } = this.props
    console.log('article : ', article);
    console.log('me : ', me);
    if (me.coins >= article.coins) {
      Member.patchAttributesById(me.id, {
        [article.property]: operations[article.operation](
          me[article.property],
          article.value
        ),
        coins: me.coins - article.coins,
      })
      Modal.open(<UI.Modals.Success
        title="Félicitation"
        description={article.description}
      />)
    }
    else {
      Modal.open(<UI.Modals.Error
        title="Désolé..."
        description="Vous ne disposez pas assez d'Eyes Cubes, pas de panique vous pouvez en trouver ou rechargez !"
        onPress={() => navigation.navigate('Wallet')}
      />)

    }

  }

  render() {
    const { me, articles } = this.props;
    const { onNavigate, onPressArticle } = this;

    return (
      <UI.Screen scroll>
        <UI.Screen.Header background>
          <UI.Screen.Header.Title light>Boutique Pop Eye</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.Screen.Header.Title dark>{ me.coins } Eyes cubes</UI.Screen.Header.Title>
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
    me: state.me,
    articles: state.articles,
    creditCard: state.creditCard,
  }),
  (dispatch, props, models) => ({
    Article: models.Article,
    Member: models.Member,
    Modal: models.Modal,
  }),
)(ShopScreen);
