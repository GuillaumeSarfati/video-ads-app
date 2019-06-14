import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ProScreen extends React.Component {
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onPress = () => {
    const { navigation } = this.props

    navigation.navigate('Authenticated')
  }

  render() {
    const { models } = this.props;
    const { onPress } = this;

    return (
      <UI.Screen>
        <UI.Text>Pro</UI.Text>
        <UI.Button onPress={onPress}>AuthenticatedScreen</UI.Button>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(ProScreen);
