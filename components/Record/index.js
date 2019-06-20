import React from 'react'
import { Video } from 'expo';

import * as UI from './ui';

export default ({onPress}) => (
  <UI.Video>
    <UI.ButtonRecord onPress={onPress}/>
    <UI.Description>
      <UI.Description.Text>Enregistre ta premiere{"\n"}Pop Annonce</UI.Description.Text>
    </UI.Description>
  </UI.Video>
)
