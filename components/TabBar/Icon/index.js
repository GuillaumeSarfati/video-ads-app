import React from 'react';
import * as UI from './ui';

export default ({children, ...props}) => (
  <UI.Component>
    <UI.Button {...props}>
      <UI.Button.Text>{children}</UI.Button.Text>
    </UI.Button>
  </UI.Component>
)
