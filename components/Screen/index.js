import React from 'react';

import * as UI from './ui';

const Screen = ({ scroll, background, children, ...props }) => {
  return scroll
  ? (
    <UI.Background source={background} {...props}>
      <UI.ScrollView bounces={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
        { children }
      </UI.ScrollView>
    </UI.Background>
  )
  : (
    <UI.View {...props}>
      <UI.Background source={background}>
        { children }
      </UI.Background>
    </UI.View>
  )
}

Screen.Theme = UI.Theme;
Screen.Header = UI.Header;
Screen.Content = UI.Content;
Screen.Row = UI.Row;
Screen.Column = UI.Column;
Screen.Footer = UI.Footer;
Screen.Liner = UI.Liner;
Screen.Description = UI.Description;
Screen.Label = UI.Label;

export default Screen;
