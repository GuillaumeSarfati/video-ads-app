import React from 'react';
import { CardIOModule} from 'react-native-awesome-card-io';
import { Permissions } from 'expo';

import connect from 'utils/connect';

import * as UI from './ui'

class TemplateScreen extends React.Component {
  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
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
    const { onScanCard } = this;

    return (
      <UI.Screen style={{padding: 15}}>
        <UI.Screen.Column style={{flex: 1, justifyContent: 'center'}}>
          {
            creditCard
              ? <UI.CreditCard model={creditCard} />
              : <UI.Text> You need to scan your card first </UI.Text>
          }
        </UI.Screen.Column>
        <UI.Button onPress={onScanCard}>Scanner ma carte</UI.Button>
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
