import React from 'react'
import Image from 'components/Image';
import Transition from 'components/Transition';

const Logo = () => (
  <Image
    source={require('assets/images/logo.png')}
    style={{
      width:300,
      height:300,
    }}
  />
)
export default ({transition}) => transition
? (
  <Transition shared="component-logo">
    <Logo/>
  </Transition>
)
: (
  <Logo/>
)
