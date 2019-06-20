import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class WelcomeScreen extends React.Component {
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { models } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Image source={require('assets/images/illustration.png')}/>
          <UI.Title dark>Bienvenue</UI.Title>
          <UI.Description center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</UI.Description>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button onPress={onNavigate('Choose')} large>Continuer</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(WelcomeScreen);
