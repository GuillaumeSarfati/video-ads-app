import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

const operations = {
  '+': (x, y) => x + parseInt(y),
  '-': (x, y) => x - parseInt(y),
  '=': (x, y) => parseInt(y),
  '*': (x, y) => x * parseInt(y),
}

class OptionsScreen extends React.Component {

  state = {
    options: []
  }

  componentWillMount = async () => {
    const { Offer, Option, offer } = this.props;

    const options = (await Option.find()).value.data

    if (offer.options) {
      this.setState({ options: options.map(option => offer.options.find(alreadyPaidOption => alreadyPaidOption.id === option.id )
        ? { ...option, alreadyPaid: true }
        : option
      )
      })
    } else {
      this.setState({ options })
    }
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  onContinue = () => async e => {

    const { offer, me, navigation } = this.props;
    const { Offer, Option, OfferOption, Member, Modal } = this.props;
    const { options } = this.state;

    let coins = 0

    options.forEach(option => {
      if (option.selected) {

        coins += option.coins
      }
    })

    if (me.coins >= coins) {
      console.log('in off coins', me.coins, coins);

      if (coins >= 0) {
        Member.patchAttributesById(me.id, { coins: me.coins - coins})
      }

      for (const option of options) {
        if (option.selected) {

          await OfferOption.create({
            offerId: offer.id,
            optionId: option.id,
            memberId: me.id
          })

          await Offer.patchAttributesById(offer.id, {
            [option.property]: operations[option.operation](
              offer[option.property],
              option.value,
            )
          })
        }
      }

      Modal.open(<UI.Modals.Success
        title="Félicitation"
        description="Votre annonce est attente de validation"
        onPress={navigation.navigate('FlowSupplier')}
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

  onChange = model => selected => {
    const options = this.state.options.map(option => {
      return option.title === model.title
        ? {...option, selected}
        : option
    })
    this.setState({ options })
  }
  render() {
    const { offer } = this.props;
    const { options } = this.state;
    const { onNavigate, onChange, onContinue } = this;

    return (
      <UI.Screen scroll>

      <UI.Screen.Header>
        <UI.Screen.Header.Bar>
          <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
            Création de votre Pop Annonce
          </UI.Screen.Header.Bar.Back>

        </UI.Screen.Header.Bar>
        <UI.Screen.Header.Title dark>Choisissez vos options</UI.Screen.Header.Title>
      </UI.Screen.Header>

        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Screen.Column style={{padding: 30}}>
          {
            options.map(option => (
              <UI.Component.Option
                value={option.selected}
                onChange={onChange}
                model={option}
              />
            ))
          }
          </UI.Screen.Column>
        </UI.Screen.Content>

        <UI.Screen.Footer>
          <UI.Component.Button onPress={onContinue()} large>Continuer</UI.Component.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
    offer: state.offer,
    options: state.options,
  }),
  (dispatch, props, models) => ({
    Modal: models.Modal,
    Member: models.Member,
    Offer: models.Offer,
    Option: models.Option,
    OfferOption: models.OfferOption,
  }),
)(OptionsScreen);
