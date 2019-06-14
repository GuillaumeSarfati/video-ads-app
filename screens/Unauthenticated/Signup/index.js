import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class LoginScreen extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
    sponsorship: '',
  }

  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onChange = property => value => {
    this.setState({ [property]: value })
  }

  onSignup = async () => {
    const { Member, navigation } = this.props
    const { firstname, lastname, birthday, gender, email, password, sponsorship } = this.state

    await Member.signup({
      birthday: new Date(birthday).getTime() / 1000,
      firstname,
      lastname,
      gender,
      email,
      password,
      sponsorship
    })

    console.log('navigate to phone number');
    navigation.navigate('PhoneNumber')
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  render() {
    const { firstname, lastname, birthday, gender, email, password, sponsorship } = this.state;
    const { onChange, onSignup, onNavigate } = this;

    return (
      <UI.Screen input>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Close onPress={onNavigate()}>
              Home
            </UI.Screen.Header.Bar.Close>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Inscription</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start' }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={firstname} onChangeText={onChange('firstname')} placeholder="Prénom"/>
            <UI.TextInput value={lastname} onChangeText={onChange('lastname')} placeholder="Nom"/>
            <UI.TextInput value={birthday} onChangeText={onChange('birthday')} placeholder="Date de naissance YYYY-MM-JJ"/>
            <UI.CheckBox value={gender} onChange={onChange('gender')} type={'male'} placeholder="Homme"/>
            <UI.CheckBox value={gender} onChange={onChange('gender')} type={'female'} placeholder="Femme"/>

            <UI.TextInput value={email} onChangeText={onChange('email')} placeholder="Adresse email" autoCapitalize="none"/>
            <UI.TextInput value={password} onChangeText={onChange('password')} placeholder="Mot de passe" secureTextEntry/>
          </UI.Screen.Column>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={sponsorship} onChangeText={onChange('sponsorship')} placeholder="Code d'invitation"/>
          </UI.Screen.Column>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onSignup}>Valider</UI.Button>
          <UI.Button type="default" large onPress={onNavigate('Login')}>Vous avez déjà un compte ?</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({
    Member: models.Member,
  }),
)(LoginScreen);
