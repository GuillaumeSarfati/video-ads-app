import React from 'react';
import * as UI from '../ui';

const Close = ({children, onPress, light}) => (
  <UI.Button onPress={onPress}>
    <UI.Icon style={{paddingRight: 15}}>&#xf406;</UI.Icon>
    {
      typeof children === 'string'
      ? <UI.Text light={light}>{ children }</UI.Text>
      : children
    }
  </UI.Button>
)

export default Close;
