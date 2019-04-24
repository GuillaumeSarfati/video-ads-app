import React from 'react';
import * as UI from '../ui';

const Close = ({children, light}) => (
  <UI.Button>
    <UI.Icon source={require('assets/images/header/close.png')}/>
    {
      typeof children === 'string'
      ? <UI.Text light={light}>{ children }</UI.Text>
      : children
    }
  </UI.Button>
)

export default Close;
