import React from 'react'
import { Video } from 'expo-av';

import * as UI from './ui';

export default ({onPress}) => (
  <UI.Video>
    <UI.ButtonRecord onPress={onPress}/>
    <UI.Description>
      <UI.Description.Text>Enregistre une nouvelle{"\n"}Pop Annonce</UI.Description.Text>
    </UI.Description>
  </UI.Video>
)
