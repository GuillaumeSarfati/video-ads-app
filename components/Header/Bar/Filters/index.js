import React from 'react';

import * as UI from '../ui';

export default ({light, children, ...props}) => (
  <UI.Button {...props}>
    {
      typeof children === 'string'
      ? <UI.Text light={light}>{ children }</UI.Text>
      : children
    }
  </UI.Button>
)
