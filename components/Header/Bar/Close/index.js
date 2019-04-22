import React from 'react';
import * as UI from '../ui';

const Close = props => (
  <UI.Button>
    <UI.Icon source={require('assets/images/header/close.png')}/>
    <UI.Text>{ props.children }</UI.Text>
  </UI.Button>
)

export default Close;
