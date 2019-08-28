import React from 'react';
import * as UI from './ui';

export default ({children, ...props}) => (
  <UI.Component>
    <UI.Button {...props}>
      <UI.Button.Image source={require('../../../assets/images/tab/home.png')}/>
    </UI.Button>
  </UI.Component>
)
