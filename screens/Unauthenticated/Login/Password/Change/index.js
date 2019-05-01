import React from 'react';

import connect from 'utils/connect';

import * as UI from '../../ui'

class ResetScreen extends React.Component {
  state = {
    password: '',
    confirmation: '',
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
      : navigation.pop()
  }

  render() {
    const { password, confirmation } = this.state;
    const { models } = this.props;
    const { onChange, onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Verifiez vos e-mails
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Nouveau mot de passe</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start' }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={password} onChange={onChange('password')} placeholder="Nouveau mot de passe" secureTextEntry/>
            <UI.TextInput value={confirmation} onChange={onChange('confirmation')} placeholder="confirmer le nouveau mot de passe" secureTextEntry/>
          </UI.Screen.Column>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onNavigate('Authenticated')}>Valider</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(ResetScreen);
