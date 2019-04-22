import React from 'react';

import * as UI from './ui';

const Screen = props => {
  const { scroll, background, children } = props

  return scroll
  ? (
    <UI.Background source={background}>
      <UI.ScrollView contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
          { children }
      </UI.ScrollView>
    </UI.Background>
  )
  : (
    <UI.View>
      <UI.Background source={background}>
        { children }
      </UI.Background>
    </UI.View>
  )
}

Screen.Content = UI.Content;
Screen.Footer = UI.Footer;

export default Screen;
