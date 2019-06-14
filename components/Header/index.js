import React from 'react';
import * as UI from './ui';

const Header = props => props.background
? (
  <UI.Background source={require('assets/images/background/wave.png')}>
    <UI.Component disabled={!props.onPress}>
      { props.children }
    </UI.Component>
  </UI.Background>
)
: (
  <UI.NoBackground>
    <UI.Component disabled={!props.onPress}>
      { props.children }
    </UI.Component>
  </UI.NoBackground>
)


Header.Title = UI.Title;
Header.Subtitle = UI.Subtitle;
Header.Bar = UI.Bar;

export default Header;
