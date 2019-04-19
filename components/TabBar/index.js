import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class TabBarComponent extends React.Component {
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { models } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Component>
        <UI.ButtonTab onPress={onNavigate('Flow')}/>
        <UI.ButtonIcon onPress={onNavigate('Record')}>Record</UI.ButtonIcon>
        <UI.ButtonIcon onPress={onNavigate('Shop')}>Shop</UI.ButtonIcon>
        <UI.ButtonIcon onPress={onNavigate('Profile')}>Profile</UI.ButtonIcon>
      </UI.Component>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(TabBarComponent);
