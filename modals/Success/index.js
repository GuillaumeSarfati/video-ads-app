import React from 'react';
import * as UI from './ui'

export default class SuccessModal extends React.Component {
   onContinue = () => {
    this.props.close()

    if (typeof this.props.onPress === 'function') {
      setTimeout(() => this.props.onPress(), 1000)
    }
  }
  render() {
    const { onContinue } = this;
    return (
      <UI.Modal>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <UI.Image source={require('assets/images/success.png')}/>
          <UI.Title dark>{this.props.title}</UI.Title>
          <UI.Description center>{this.props.description}</UI.Description>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button onPress={onContinue}>Continuer</UI.Button>
        </UI.Screen.Footer>
      </UI.Modal>
    )
  }
}
