import React from 'react';
import * as UI from '../ui';

const Back = props => (
  <UI.Button>
    <UI.Icon source={require('assets/images/header/back.png')}/>
    <UI.Text>{ props.children }</UI.Text>
  </UI.Button>
)

export default Back;
