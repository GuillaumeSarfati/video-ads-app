import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class LoginScreen extends React.Component {
  state = {
    code: '',
  }

  onChange = property => value => {
    this.setState({ [property]: value })
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  render() {
    const { code } = this.state;
    const { models } = this.props;
    const { onChange, onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Signup
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Confirmez votre compte</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start', alignItems: 'flex-start'  }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.Screen.Description>At vero eos et accusamus et iust  nissimos ducimus qui blanditiis praes entium volup tatum deleniti.</UI.Screen.Description>
            <UI.TextInput value={code} onChangeText={onChange('code')} placeholder="Numéro de téléphone"/>
          </UI.Screen.Column>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onNavigate('Verification')}>Valider</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(LoginScreen);
