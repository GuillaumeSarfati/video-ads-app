import React from 'react';
import * as UI from '../ui';

const Back = ({children, light}) => (
  <UI.Button>
    <UI.Icon source={require('assets/images/header/back.png')}/>
    <UI.Text light={light}>{ children }</UI.Text>
  </UI.Button>
)

export default Back;
