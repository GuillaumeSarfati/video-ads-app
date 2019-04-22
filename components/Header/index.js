import React from 'react';
import * as UI from './ui';

const Header = props => props.background
? (
  <UI.Background source={require('assets/images/background/wave.png')}>
    <UI.Component>
      { props.children }
    </UI.Component>
  </UI.Background>
)
: (
  <UI.Component>
    { props.children }
  </UI.Component>
)


Header.Title = UI.Title;
Header.Subtitle = UI.Subtitle;

export default Header;
