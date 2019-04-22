import React from 'react';

import connect from 'utils/connect';

import * as UI from '../../ui'

class ResetScreen extends React.Component {
  state = {
    code: '',
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
    const { code } = this.state;
    const { models } = this.props;
    const { onChange, onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar onPress={onNavigate()}>
            <UI.Screen.Header.Bar.Back>
              Reinitialisez votre mot de passe
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Verifiez vos e-mails</UI.Screen.Header.Title>
        </UI.Screen.Header>
        <UI.Screen.Content style={{ justifyContent: 'flex-start' }}>
          <UI.Screen.Column style={{ padding: 30}}>
            <UI.TextInput value={code} onChange={onChange('code')} placeholder="Code Envoyer par email"/>
          </UI.Screen.Column>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="primary" large onPress={onNavigate('Change')}>Suivant</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(ResetScreen);
