import React from 'react'
import { Dimensions } from 'react-native'

import Image from 'components/Image';
import Component from 'components/Component'

export default () => (
  <Component.Row style={{justifyContent: 'center', alignItems: 'center'}}>
  <Image
    source={require('assets/images/logo.png')}
    style={{
      width:  Dimensions.get('window').width / 1.25,
      height: Dimensions.get('window').width / 1.25,
    }}
  />
  </Component.Row>
)
