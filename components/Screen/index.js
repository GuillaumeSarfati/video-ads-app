import React from 'react';

import * as UI from './ui';

const Screen = props => {
  const { scroll, background, children } = props

  return scroll
  ? (
    <UI.Background source={background}>
      <UI.ScrollView bounces={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
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

Screen.Header = UI.Header;
Screen.Content = UI.Content;
Screen.Row = UI.Row;
Screen.Column = UI.Column;
Screen.Footer = UI.Footer;

export default Screen;
