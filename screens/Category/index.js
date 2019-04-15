import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

export default props => (
  <UI.Screen>
    <UI.Transition shared="text">
      <UI.Title>Category</UI.Title>
    </UI.Transition>
    <UI.Button onPress={() => props.navigation.navigate('Advertisement')}>
      <UI.Button.Title> Go Back </UI.Button.Title>
    </UI.Button>
  </UI.Screen>
)
