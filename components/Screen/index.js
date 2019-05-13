import React from 'react';

import * as UI from './ui';

const Screens = {
  scroll: ({ scroll, background, children, ...props }) => (
    <UI.Background source={background} {...props}>
      <UI.ScrollView bounces={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
        { children }
      </UI.ScrollView>
    </UI.Background>
  ),
  input: ({ scroll, background, children, ...props }) => (
    <UI.View {...props}>
      <UI.InputScrollView bounces={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
        { children }
      </UI.InputScrollView>
    </UI.View>
  ),
  default: ({ scroll, background, children, ...props }) => (
    <UI.View {...props}>
      <UI.Background source={background}>
        { children }
      </UI.Background>
    </UI.View>
  ),
}

const Screen = ({ scroll, input, ...props }) => {
    if (scroll) return Screens.scroll(props)
    if (input) return Screens.input(props)
    return Screens.default(props)
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
