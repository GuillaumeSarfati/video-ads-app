import React from 'react';
import { Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class CommentScreen extends React.Component {
  state = {
    current: null,
  }

  componentWillMount() {
    const { Packs, Modal } = this.props;

    Packs.find()
  }

  onChange = property => value => {
    this.setState({[property]: value})
  }

  onNavigate = screen => async e => {
    const { navigation } = this.props

    return screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  onPressPack = current => e => this.setState({ current })

  onBuy = async e => {

    const { Packs, Modal, creditCard, me, navigation } = this.props

    if (creditCard) {
      const response = await Packs.buy(this.state.current.id, me.id)
      Modal.open(
        <UI.Modals.Success
          title="Félicitation"
          description={"Vous venez de recharger " + this.state.current.coins + " Eyes Cubes."}
        />
      )
    }
    else {
      Modal.open(
        <UI.Modals.Error
          title="Désolé..."
          description={"Une Erreur est survenue lors de votre paiement."}
        />
      )
      navigation.navigate('CreditCard')
    }
  }
  render() {
    const { me, creditCard, packs } = this.props;
    const { current } = this.state;
    const { onPressPack, onBuy, onNavigate } = this;

    return (
      <UI.Screen style={{justifyContent: 'space-between'}}>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Boutique Pop Eye
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>{ me.coins } Eyes cubes</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Row style={{flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            packs.map(pack => (
              <UI.Component.Choice
              onPress={onPressPack(pack)}
              selected={pack === current}
              {...pack}
              />
            ))
          }
        </UI.Screen.Row>

        <UI.Screen.Row style={{justifyContent: 'center'}}>
          <UI.Component.CreditCard onPress={onNavigate('CreditCard')} model={creditCard} small/>
        </UI.Screen.Row>

        <UI.Screen.Footer>
          <UI.Button type={current ? 'primary': 'default'} onPress={onBuy}>Acheter</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
    packs: state.packs,
    creditCard: state.creditCard,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
    Packs: models.Packs,
    Modal: models.Modal,
  }),
)(CommentScreen);
