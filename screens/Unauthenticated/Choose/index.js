import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ChooseScreen extends React.Component {
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
        <UI.Text>ChooseScreen</UI.Text>
        <UI.Button onPress={onNavigate('Authenticated')}>Authenticated</UI.Button>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(ChooseScreen);
