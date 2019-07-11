import React from 'react';
import { CardIOModule} from 'react-native-awesome-card-io';
import { Permissions } from 'expo';

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
    const { CreditCard } = this.props;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status === 'granted') {
      CreditCard.set(await CardIOModule.scanCard({
        guideColor: 0xFFFFFFFF,
        hideCardIOLogo: true,
      }))
    }
  }
  render() {
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
    creditCard: state.creditCard,
  }),
  (dispatch, props, models) => ({
    CreditCard: models.CreditCard,
  }),
)(TemplateScreen);
