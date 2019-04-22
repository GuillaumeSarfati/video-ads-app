import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    sponsorship: '',
  }

  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onChange = property => e => {
    this.setState({ [property]: e.target.value })
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.goBack()
  }

  render() {
    const { email, password, sponsorship } = this.state;
    const { models } = this.props;
    const { onChange, onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar onPress={onNavigate()}>
            <UI.Screen.Header.Bar.Close>
              Home
            </UI.Screen.Header.Bar.Close>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Inscription</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start' }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={email} onChange={onChange('email')} placeholder="Adresse email"/>
            <UI.TextInput value={password} onChange={onChange('password')} placeholder="Mot de passe" secureTextEntry/>
          </UI.Screen.Column>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={sponsorship} onChange={onChange('sponsorship')} placeholder="Code d'invitation"/>
          </UI.Screen.Column>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onNavigate('Verification')}>Valider</UI.Button>
          <UI.Button type="default" large onPress={onNavigate('Login')}>Vous avez déjà un compte ?</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(LoginScreen);
