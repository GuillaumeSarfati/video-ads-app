import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class VerificationScreen extends React.Component {
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
      <UI.Screen>
        <UI.Text>VerificationScreen</UI.Text>
        <UI.Button onPress={onNavigate('Welcome')}>Welcome</UI.Button>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(VerificationScreen);
