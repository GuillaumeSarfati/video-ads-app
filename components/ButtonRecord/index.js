import React from 'react';

import * as UI from './ui';

export default ({onPress}) => (
  <UI.Button.Opacity>
  <UI.Button onPress={onPress}>
    <UI.Gradient
      start={{x: 0.0, y: 1}} end={{x: 1, y: 1.0}}
      colors={['#A97CCC', '#2F89F8']}
      locations={[0,1]}
      style={{width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center'}}
    >
        <UI.Button.Text>REC</UI.Button.Text>
    </UI.Gradient>
    </UI.Button>
  </UI.Button.Opacity>
)
