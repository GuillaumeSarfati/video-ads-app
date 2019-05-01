import React from 'react';
import * as UI from '../ui';

const Back = ({children, onPress, light}) => (
  <UI.Button onPress={onPress}>
    <UI.Icon source={require('assets/images/header/back.png')}/>
    {
      typeof children === 'string'
      ? <UI.Text light={light}>{ children }</UI.Text>
      : children
    }
  </UI.Button>
)

export default Back;
