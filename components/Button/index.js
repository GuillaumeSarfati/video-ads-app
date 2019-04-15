import React from 'react';
import * as UI from './ui';

export default ({children, ...props}) => (
  <UI.Component>
    <UI.Button {...props}>
      <UI.Button.Title>{children}</UI.Button.Title>
    </UI.Button>
  </UI.Component>
)
