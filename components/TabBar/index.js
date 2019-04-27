import React from 'react';
import { LayoutAnimation } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

import connect from 'utils/connect';

import * as UI from './ui'

class TabBarComponent extends React.Component {

  state = {
    tabs: [
      'Flow',
      'Record',
      'Shop',
      'Profile',
    ],
    current: 'Flow',
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.me
  }
  
  onNavigate = current => e => {
    const { navigation } = this.props

    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });

    this.setState({ current }, () => navigation.navigate(current))
  }

  render() {
    const { tabs, current } = this.state;
    const { me } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Component>
        {
          tabs.map(tab => (
            <UI.ButtonTest
              key={tab}
              current={current === tab}
              onPress={onNavigate(tab)}
            >
              { tab }
            </UI.ButtonTest>
          ))
        }
        <UI.TouchableOpacity onPress={onNavigate('Profile')}>
          <UI.Avatar source={{ uri: me.picture }} />
        </UI.TouchableOpacity>
      </UI.Component>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({}),
)(TabBarComponent);
