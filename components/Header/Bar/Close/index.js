import React from 'react';
import * as UI from '../ui';

const Close = ({children, light}) => (
  <UI.Button>
    <UI.Icon source={require('assets/images/header/close.png')}/>
    <UI.Text light={light}>{ children }</UI.Text>
  </UI.Button>
)

export default Close;
