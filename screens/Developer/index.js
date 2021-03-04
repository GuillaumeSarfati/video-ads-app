import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { AsyncStorage } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class OptionsScreen extends React.Component {

  componentWillMount() {
    const { Offer } = this.props

    Offer.findOne()
  }
  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  onClearStorage = async () => {
    const { navigation } = this.props

    await AsyncStorage.clear()
    await navigation.navigate('Home')
  }

  render() {
    const { onNavigate, onClearStorage } = this;

    const { offer } = this.props;

    return (
      <UI.Screen scroll>

      <UI.Screen.Header>
        <UI.Screen.Header.Bar>
          <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
            Settings
          </UI.Screen.Header.Bar.Back>

        </UI.Screen.Header.Bar>
        <UI.Screen.Header.Title dark>Developer</UI.Screen.Header.Title>
      </UI.Screen.Header>

        <ExpoConfigView style={{flex: 1}}/>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Screen.Column style={{padding: 50, alignItems:'center'}}>
            <UI.Component.Button onPress={onClearStorage}>Clear Storage</UI.Component.Button>
          </UI.Screen.Column>
        </UI.Screen.Content>



      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    offer: state.offer,
  }),
  (dispatch, props, models) => ({
    Offer: models.offer,
  }),
)(OptionsScreen);
