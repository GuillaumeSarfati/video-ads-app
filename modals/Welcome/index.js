import React from 'react';
import * as UI from './ui'

export default props => (
  <UI.Modal>
    <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
      <UI.Image source={require('assets/images/illustration.png')}/>
      <UI.Title dark>Bienvenue</UI.Title>
      <UI.Description center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</UI.Description>
    </UI.Screen.Content>
    <UI.Screen.Footer>
      <UI.Button onPress={props.close}>Continuer</UI.Button>
    </UI.Screen.Footer>
  </UI.Modal>
)
