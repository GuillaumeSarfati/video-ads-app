import React from 'react';
import { CardIOModule} from 'react-native-awesome-card-io';
import * as Permissions from 'expo-permissions';

var stripe = require('stripe-client')('pk_test_UvVfYE7WAB8fIpQhtPOJApmU00DqnUCpsA');

import connect from 'utils/connect';

import * as UI from './ui'

class TemplateScreen extends React.Component {
  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  onScanCard = async card => {
    const { CreditCard, me, navigation } = this.props;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status === 'granted') {
      const card = await CardIOModule.scanCard({
        guideColor: '#FFFFFF',
        hideCardIOLogo: true,
      })

      const stripeCard = await stripe.createToken({
        card: {
          "number": card.cardNumber,
          "exp_month": card.expiryMonth,
          "exp_year": card.expiryYear,
          "cvc": card.cvv
        }
      });

      CreditCard.create({
        "cardType": stripeCard.card.brand,
        "cardNumber": stripeCard.card.last4,
        "expiryMonth":stripeCard.card.exp_month,
        "expiryYear":stripeCard.card.exp_year,
        "stripeId": stripeCard.card.id,
        "tokenId": stripeCard.id,
        "memberId": me.id,
      });

      navigation.pop()
    }
  }
  render() {
    console.log('stripe', stripe);
    const { creditCard } = this.props;
    const { onScanCard, onNavigate } = this;

    return (
      <UI.Screen style={{justifyContent: 'space-between'}}>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Porte Monnaie
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Votre moyen de paiement</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Column style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {
            creditCard
              ? <UI.CreditCard model={creditCard} />
              : <UI.Component.Image style={{opacity: 0.25, width: 125, height: 100}} source={require('assets/images/scan.png')}/>
          }
        </UI.Screen.Column>

        <UI.Screen.Footer>
          <UI.Button onPress={onScanCard}>Scanner ma carte</UI.Button>
        </UI.Screen.Footer>

      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
    creditCard: state.creditCard,
  }),
  (dispatch, props, models) => ({
    CreditCard: models.CreditCard,
  }),
)(TemplateScreen);
