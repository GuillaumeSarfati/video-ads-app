import React from 'react';
import * as UI from './ui';

const colors = {
  facebook: ['#4267B2', '#4267B2'],
  primary: ['#A97CCC', '#2F89F8'],
  default: ['#00000020', '#00000020'],
}

export default ({children, type='primary', color='white', large, ...props}) => (
  <UI.Component large={large}>
    <UI.Gradient
      start={{x: 0.0, y: 1}} end={{x: 1, y: 1.0}}
      colors={colors[type]}
      locations={[0,1]}
    >
    <UI.Button {...props}>
      <UI.Button.Title color={color}>{children}</UI.Button.Title>
    </UI.Button>
    </UI.Gradient>
  </UI.Component>
)
