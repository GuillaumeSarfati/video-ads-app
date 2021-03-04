import React from 'react';
import * as UI from './ui'

export default class RechargeModal extends React.Component {
  onContinue = () => {
    this.props.close()

    if (typeof this.props.onPress === 'function') {
      setTimeout(() => this.props.onPress(), 500)
    }
  }
  render() {
    const { onContinue } = this;
    return (
      <UI.Modal>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <UI.Image source={require('assets/images/sad.png')}/>
          <UI.Title dark>Limite atteinte</UI.Title>
          <UI.Description center>Vous avez contacter beaucoup d'annonces ce mois ci. Pour contacter plus de personne veuillez recharger</UI.Description>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button onPress={onContinue}>Continuer</UI.Button>
        </UI.Screen.Footer>
      </UI.Modal>
    )
  }
}
