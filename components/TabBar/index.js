import React from 'react';

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

  onNavigate = current => e => {
    const { navigation } = this.props

    const CustomLayoutLinear = {
      duration: 300,
      create: {
        type: UI.LayoutAnimation.Types.linear,
        property: UI.LayoutAnimation.Properties.opacity,
      },
      update: {
        type: UI.LayoutAnimation.Types.linear,
      },
    };

    UI.LayoutAnimation.configureNext(CustomLayoutLinear);

    this.setState({ current }, () => navigation.navigate(current))
  }

  render() {
    const { tabs, current } = this.state;
    const { models } = this.props;
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
      </UI.Component>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(TabBarComponent);
