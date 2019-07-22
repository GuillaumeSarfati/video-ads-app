import React from 'react';
import * as UI from './ui'

export default class SuccessModal extends React.Component {
  render() {
    return (
      <UI.Modal>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Image source={require('assets/images/success.png')}/>
          <UI.Title dark>{this.props.title}</UI.Title>
          <UI.Description center>{this.props.description}</UI.Description>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button onPress={this.props.close}>Continuer</UI.Button>
        </UI.Screen.Footer>
      </UI.Modal>
    )
  }
}
