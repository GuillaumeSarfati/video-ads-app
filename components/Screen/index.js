import React from 'react';

import * as UI from './ui';

const Screens = {
  scroll: ({ scroll, background, children, ...props }) => (
      <UI.View>
      <UI.ScrollView bounces={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
      { children }
      </UI.ScrollView>
      </UI.View>
  ),
  input: ({ scroll, background, children, ...props }) => (
    <UI.View {...props}>
      <UI.InputScrollView bounces={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'stretch'}}>
        { children }
      </UI.InputScrollView>
    </UI.View>
  ),
  background: ({ scroll, background, children, ...props }) => (
    <UI.Background source={background} style={{flex: 1}} {...props}>
        { children }
    </UI.Background>
  ),
  default: ({ scroll, background, children, ...props }) => (
    <UI.View style={{flex: 1}} {...props}>
        { children }
    </UI.View>
  ),
}

const Screen = ({ scroll, background, input, ...props }) => {
    if (background) return Screens.background({background, ...props})
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
Screen.Title = UI.Title;
Screen.Description = UI.Description;
Screen.Label = UI.Label;

export default Screen;
