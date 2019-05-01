import React from 'react';

import connect from 'utils/connect';

import * as UI from '../../ui'

class ResetScreen extends React.Component {
  state = {
    email: '',
    password: '',
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
    const { email } = this.state;
    const { models } = this.props;
    const { onChange, onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Connectez vous
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Reinitialisez votre mot de passe</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start' }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={email} onChange={onChange('email')} placeholder="Adresse email"/>
          </UI.Screen.Column>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onNavigate('Check')}>Valider</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(ResetScreen);
