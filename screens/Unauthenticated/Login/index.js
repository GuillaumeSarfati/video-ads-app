import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  componentWillMount = async () => {
    const { Model } = this.props;
  }



  onChange = property => value => {
    this.setState({ [property]: value })
  }

  onLogin = async () => {
    const { Member, navigation } = this.props;
    const { email, password } = this.state;

    await Member.login({
      email,
      password,
    })
    navigation.navigate('Authenticated')
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  render() {
    const { email, password } = this.state;
    const { models } = this.props;
    const { onChange, onNavigate, onLogin } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Close onPress={onNavigate()}>
              Home
            </UI.Screen.Header.Bar.Close>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Connectez-vous</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start' }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={email} onChangeText={onChange('email')} placeholder="Adresse email" autoCapitalize="none" />
            <UI.TextInput value={password} onChangeText={onChange('password')} placeholder="Mot de passe" secureTextEntry />
          </UI.Screen.Column>
          <UI.ResetPassword>
            <UI.ResetPassword.Text>Mot de pass oublié ? </UI.ResetPassword.Text>
            <UI.ResetPassword.Link onPress={onNavigate('Reset')}>
              <UI.ResetPassword.Text.Underline>Réinitialiser</UI.ResetPassword.Text.Underline>
            </UI.ResetPassword.Link>
          </UI.ResetPassword>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onLogin}>Valider</UI.Button>
          <UI.Button type="default" large onPress={onNavigate('Signup')}>Vous n'avez pas de compte ?</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({
    Member: models.member,
  }),
)(LoginScreen);
