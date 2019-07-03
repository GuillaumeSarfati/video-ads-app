import React from 'react';
import { Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class ChooseScreen extends React.Component {
  state = {
    mode: 'consumer',
  }

  onChoose = mode => async e => {
    this.setState({ mode })
  }

  onContinue = async e => {
    const { Member, navigation, me } = this.props;
    const { mode } = this.state;

    await Member.patchAttributsById(me.id, { mode })

    navigation.navigate(mode === 'consumer'
      ? 'FlowConsumer'
      : 'FlowSupplier'
    )
  }
  render() {
    const { me } = this.props;
    const { onChoose, onContinue } = this;

    return (
      <UI.Screen>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Title dark>Bienvenue {me.firstname}</UI.Title>
          <UI.Description center>Ne vous inquiétez pas vous pouvez a tout moment switcher de profil pour devenir prestataire ou bien rechercher des services</UI.Description>
          <UI.Screen.Row style={{justifyContent: 'flex-start', marginTop: 30}}>
          <UI.Choice
            onPress={onChoose('consumer')}
            style={{marginRight: 15}}
            icon={require('assets/images/consumer.png')}
            title="Je recherche des services"
            subtitle="On vous facilite la tâche !"
            selected={this.state.mode === 'consumer'}
          />
          <UI.Choice
            onPress={onChoose('supplier')}
            icon={require('assets/images/supplier.png')}
            title="Je propose des services"
            subtitle="On fait de vous une star."
            selected={this.state.mode === 'supplier'}
          />
          </UI.Screen.Row>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button onPress={onContinue} large>Commencer</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
  }),
)(ChooseScreen);
