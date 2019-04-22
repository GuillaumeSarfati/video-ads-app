import React from 'react';
import * as UI from './ui';

const Bar = props => (
  <UI.Component {...props} />
)

Bar.Close = UI.Close;
Bar.Back = UI.Back;

export default Bar;
