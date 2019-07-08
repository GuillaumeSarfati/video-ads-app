import React from 'react'
import { Video } from 'expo';

import * as UI from './ui';

export default props => (
  <UI.Video {...props}>
    <UI.Component.Icon name="ios-play" size={32} color="white" />
  </UI.Video>
)
